import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ListContext } from "../../context/ListContext";
import { UserContext } from "../../context/UserContext";
import { NotificationContext } from "../../context/NotificationContext";
import { updateList } from '../../services/updateList';
import { createList } from '../../services/createList';

const SaveListButton = () => {
  const { list, listId, title, setEdit } = useContext(ListContext);
  const { isLoggedIn } = useContext(UserContext);
  const { setSuccess, setNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleListSave = async () => {
    const listData = { title, list: list.map(item => item.item) }
    const token = localStorage.getItem('DND_AUTH_TOKEN');
    try {
      const response = await updateList(listData, token, listId);
      setSuccess(true)
      setNotification(response.data.message)
      setEdit(true);
    } catch (err) {
      setSuccess(false)
      setNotification(err.response.data.message)
    }
    
    setEdit(false);
  };

  const handleListCreation = async () => {
    const listData = { title, list: list.map(item => item.item) }
    const token = localStorage.getItem('DND_AUTH_TOKEN');
    try {
      const response = await createList(listData, token, listId);
      setSuccess(true)
      setNotification(response.data.message)
      setEdit(true);
      navigate('/lists')
    } catch (err) {
      setSuccess(false)
      setNotification(err.response.data.message)
    }
    
    setEdit(false);
  }

  const handleSoftSave = () => {
    setEdit(false);
  }

  return (
    <>
      {isLoggedIn ?
        <button
          onClick={listId ? handleListSave : handleListCreation}
          className='btn btn-primary SaveListButton'
        >
          {listId ? 'Save List' : 'Create List' }
        </button>
        :
        <button
          onClick={handleSoftSave}
          className='btn btn-primary SaveListButton'
        >
          Save List
        </button>
      }
    </>
  );
};

export default SaveListButton;
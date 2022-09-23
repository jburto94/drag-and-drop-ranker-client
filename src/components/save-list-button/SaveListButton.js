import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import { NotificationContext } from "../../context/NotificationContext";
import { updateList } from '../../services/updateList';

const SaveListButton = () => {
  const { list, listId, title, setTitle, setEdit } = useContext(ListContext);
  const { setSuccess, setNotification } = useContext(NotificationContext);

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

  const handleListCreation = () => {

  }

  return (
    <button
      onClick={listId ? handleListSave : handleListCreation}
      className='btn btn-primary'
    >
      {listId ? 'Save List' : 'Create List' }
    </button>
  );
};

export default SaveListButton;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ListContext } from "../../context/ListContext";
import { NotificationContext } from "../../context/NotificationContext";

import { deleteList } from '../../services/deleteList';


const DeleteListButton = () => {
  const { listId } = useContext(ListContext);
  const { setSuccess, setNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleListDelete()
        },
        {
          label: 'No',
          onClick: () => null
        }
      ]
    })
  };

  const handleListDelete = async () => {
    const token = localStorage.getItem('DND_AUTH_TOKEN');
    try {
      const response = await deleteList(token, listId);
      setSuccess(true)
      setNotification(response.data.message);
      navigate('/lists');
    } catch (err) {
      setSuccess(false)
      setNotification(err.response.data.message)
    }
  }

  return (
    <>
      { listId &&
      <button
        onClick={handleClick}
        className='btn btn-danger DeleteListButton'
      >
        Delete List
      </button>
      }
    </>
  );
};

export default DeleteListButton;
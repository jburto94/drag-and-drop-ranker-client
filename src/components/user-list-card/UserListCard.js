import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../../context/ListContext";
import { getList } from "../../services/getList";

import './UserListCard.scss';

const UserListCard = ({ list }) => {
  const { renderList, setListId, setTitle, setEdit } = useContext(ListContext);
  const navigate = useNavigate();

  const handleListClick = async () => {
    const token = localStorage.getItem('DND_AUTH_TOKEN')
    const selectedList = await getList(token, list._id);
    const { _id, title, items } = selectedList.data.list;
    const shownList = items.map(item => item.text)
    renderList(shownList);
    setEdit(false);
    setTitle(title);
    setListId(_id);
    navigate('/');
  }

  return (
    <div className="UserListCard" onClick={handleListClick}>
      <h2>{list.title}</h2>
    </div>
  );
};

export default UserListCard;
import { useContext, useEffect } from "react";
import { UserListsContext } from "../../context/UserListsContext";

import { getUserLists } from '../../services/getUserLists';
import UserListCard from "../user-list-card/UserListCard";

const UserLists = () => {
  const { lists, setLists } = useContext(UserListsContext);

  useEffect(() => {
    const token = localStorage.getItem('DND_AUTH_TOKEN')
    getUserLists(token)
      .then(res => {
        setLists(res.data.listData)
        return;
      })
  }, [setLists]);

  return (
    <div className="UserLists">
      <div className="container py-5">
        <h2 className="mb-4 text-center">Your Lists</h2>
        <div className="row">
          {lists ?
            <div className="col-lg-4 col-mg-6">
              {lists.map(list => {
                return <UserListCard list={list} key={list._id} />
              })}
            </div> :
            <h2>You have no lists saved.</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default UserLists;
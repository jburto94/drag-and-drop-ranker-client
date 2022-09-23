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
        const sortedListsByLastUpdate = res.data.listData.sort((a, b) => (a.updatedAt < b.updatedAt) ? 1 : -1 );
        setLists(sortedListsByLastUpdate)
        return;
      })
  }, [setLists]);

  return (
    <div className="UserLists">
      <div className="container py-5">
          {lists.length > 0 ?
            <>
              <h2 className="mb-4 text-center">Your Lists</h2>
              <div className="row">
                {lists.map(list => (
                  <div className="col-lg-4 col-md-6 mb-4" key={list._id}>
                    <UserListCard list={list} />
                  </div>
                ))}
            </div>
            </> :
            <h2>You have no lists saved.</h2>
          }
      </div>
    </div>
  );
};

export default UserLists;
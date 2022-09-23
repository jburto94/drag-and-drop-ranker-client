import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"
import UserLists from "../user-lists/UserLists";

const Lists = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <UserLists />
  )
}

export default Lists;
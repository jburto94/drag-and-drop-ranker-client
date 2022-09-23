import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { ListContext } from '../../../context/ListContext';
import { NotificationContext } from '../../../context/NotificationContext';
import './Navbar.scss';
import { UserListsContext } from '../../../context/UserListsContext';

const Navbar = () => {
  const { setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { resetListData } = useContext(ListContext);
  const { setSuccess, setNotification } = useContext(NotificationContext);
  const { setLists } = useContext(UserListsContext);
  const navigate = useNavigate();

  const handleLogout = async e => {
    e.preventDefault();
    localStorage.removeItem('DND_AUTH_TOKEN');
    setLists([]);
    resetListData();
    setUser(null);
    setIsLoggedIn(false);
    setSuccess(true);
    setNotification('User has been logged out.')
    navigate('/login')
  }

  const handleNewList = async () => {
    await resetListData();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>DnD Ranker</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {isLoggedIn ?
              <>
                <NavLink to='/create-list' onClick={handleNewList} className='nav-link'>Create New List</NavLink>
                <NavLink to='/lists' className='nav-link'>My Lists</NavLink>
                <span className='nav-link border-0 bg-primary logout' onClick={handleLogout}>Logout</span>
              </>
              :
              <>
                <NavLink to='/login' className="nav-link" >Login</NavLink>
                <NavLink to='/register' className="nav-link" >Register</NavLink>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
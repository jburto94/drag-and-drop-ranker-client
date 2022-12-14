import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotificationContext } from './context/NotificationContext';
import { UserContext } from './context/UserContext';
import { ListContext } from './context/ListContext';

import Navbar from './components/partials/Navbar/Navbar';
import Home from './components/routes/Home';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import ForgotPassword from './components/routes/ForgotPassword';
import ResetPassword from './components/routes/ResetPassword';
import VerifyEmail from './components/routes/VerifyEmail';
import Notification from './components/partials/notification/Notification';
import Lists from './components/routes/Lists';
import Footer from './components/partials/Footer/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import jwtDecode from 'jwt-decode';

const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { notification, setNotification } = useContext(NotificationContext);
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const { list, setList, title, setTitle, listId, setListId } = useContext(ListContext);

  // Set list, title, and listId to what is saved on localStorage
  // In order to persist list context through page reloads
  useEffect(() => {
    setList(JSON.parse(window.localStorage.getItem('list')));
    setTitle(window.localStorage.getItem('title'));
    setListId(window.localStorage.getItem('listId'));
  }, [setList, setTitle, setListId])

  useEffect(()  => {
    window.localStorage.setItem('list', JSON.stringify(list));
    window.localStorage.setItem('title', title);
    window.localStorage.setItem('listId', listId);
  }, [list, title, listId])

  // Check if a user is signed in
  useEffect(() => {
    const token = localStorage.getItem('DND_AUTH_TOKEN');

    if (token) {
      const decodedToken = jwtDecode(token);
      
      if (!decodedToken) {
        setUser(null);
        setIsLoggedIn(false);
      } else {
        setUser(decodedToken);
        setIsLoggedIn(true);
      }
    }
  }, [setUser, setIsLoggedIn]);

  // Check for notifications
  useEffect(() => {
    if (notification) {
      setShowNotification(true);
      const notificationTimer = setTimeout(() => {
        setShowNotification(false);
        setNotification('');
      }, 8000);

      return () => {
        clearTimeout(notificationTimer);
      }
    }
  }, [setNotification, notification]);

  return (
    <div className="App">
      <Navbar />
      {showNotification &&
        <Notification />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/create-list' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
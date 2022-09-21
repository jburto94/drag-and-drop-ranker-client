import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotificationContext } from './context/NotificationContext';
import { UserContext } from './context/UserContext';

import Navbar from './components/partials/navbar/Navbar';
import Home from './components/routes/Home';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import ForgotPassword from './components/routes/ForgotPassword';
import ResetPassword from './components/routes/ResetPassword';
import VerifyEmail from './components/routes/VerifyEmail';
import Notification from './components/partials/notification/Notification';
import Footer from './components/partials/footer/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import jwtDecode from 'jwt-decode';

const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { notification, setNotification } = useContext(NotificationContext);
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  // Check if a user is signed in
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('DND_AUTH_TOKEN'));

    if (token) {
      const decodedToken = jwtDecode(token);
      
      if (decodedToken) {
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
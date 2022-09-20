import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadListForm from './components/upload-list-form/UploadListForm';
import EditableList from './components/editable-list/EditableList';
import Footer from './components/partials/footer/Footer';
import { NotificationContext } from './context/NotificationContext';
import Navbar from './components/partials/navbar/Navbar';
import Home from './components/routes/Home';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import ForgotPassword from './components/routes/ForgotPassword';
import ResetPassword from './components/routes/ResetPassword';
import VerifyEmail from './components/routes/VerifyEmail';
import Notification from './components/partials/notification/Notification';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';

const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { notification, setNotification } = useContext(NotificationContext);

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
  }, [notification])

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
      {/* <Navbar />
      <div className='page-container container py-5'>
        <UploadListForm />
        <EditableList />
      </div> */}
    </div>
  );
}

export default App;
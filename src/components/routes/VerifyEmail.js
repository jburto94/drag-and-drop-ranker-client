import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { NotificationContext } from '../../context/NotificationContext';
import { emailVerification } from '../../services/verifyEmail';

const VerifyEmail = () => {
  const { setNotification, setSuccess } = useContext(NotificationContext);
  const navigate = useNavigate();

  const paramString = useLocation().search;
  const token = paramString.split('?')[1];

  useEffect(() => {
      emailVerification(token)
        .then(response => {
          setNotification(response.data.message);
          setSuccess(true);
          navigate('/login')
        })
        .catch(err => {
          setNotification(err.response.data.message);
          setSuccess(false);
        })
  }, [setNotification, navigate, setSuccess, token]);

  return (
    <div>
    </div>
  );
};

export default VerifyEmail;
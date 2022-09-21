import jwtDecode from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { NotificationContext } from '../../context/NotificationContext';
import { verifyToken } from '../../services/verifyToken';
import { resetPassword } from '../../services/resetPassword';

const defaultFormFields = {
  password: '',
  passwordConfirmation: ''
};

const ResetPasswordForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, passwordConfirmation } = formFields;
  const { setSuccess, setNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const paramString = useLocation().search;
  const token = paramString.split('?')[1];
  
  //  verify token
  useEffect(() => {
    verifyToken(token)
      .catch(err => {
        setNotification(err.response.data.message);
        setSuccess(false);
      })
}, [setNotification, setSuccess, token]);

  // set dynamic handleChange for each input type
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const decodedToken = await jwtDecode(token);
    const email = decodedToken.email;

    try {
      const response = await resetPassword({
        email,
        password,
        passwordConfirmation
      });
      
      setSuccess(true);
      setNotification(response.data.message);
      navigate('/login');
    } catch (err) {
      setSuccess(false);
      setNotification(err.response.data.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          id="password" 
          className="form-control" 
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="passwordConfirmation">Confirm Password</label>
        <input 
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleChange}
          required
          id="passwordConfirmation" 
          className="form-control" 
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
  </form>
  );
};

export default ResetPasswordForm;
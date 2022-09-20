import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from '../../context/NotificationContext';
import { register } from '../../services/register';

const defaultFormFields = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, passwordConfirmation } = formFields;
  const { setNotification, setSuccess } = useContext(NotificationContext);
  const navigate = useNavigate();

  // set dynamic handleChange for each input type
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response  = await register({ username, email, password, passwordConfirmation });
      
      setSuccess(true);
      setNotification(response.data.message);
      navigate('/');
    } catch (err) {
      setSuccess(false);
      setNotification(err.response.data.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="username">Username</label>
        <input 
          type="text" 
          name="username"
          value={username}
          onChange={handleChange}
          required
          id="username" 
          className="form-control" 
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="email">Email address</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          required
          id="email" 
          className="form-control" 
        />
      </div>
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
      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
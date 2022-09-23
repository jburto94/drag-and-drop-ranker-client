import jwtDecode from 'jwt-decode';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from '../../context/NotificationContext';
import { UserContext } from '../../context/UserContext';
import { login } from '../../services/login';

const defaultFormFields = {
  email: '',
  password: ''
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [checked, setChecked] = useState(false);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const { setNotification, setSuccess } = useContext(NotificationContext);
  const { setUser, setIsLoggedIn } = useContext(UserContext);


  // set dynamic handleChange for each input type
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      const response = await login({
        email,
        password,
        remember: String(checked)
      });

      console.log(response.data.token);
      const token = response.data.token;
      localStorage.setItem('DND_AUTH_TOKEN', JSON.stringify(token));
      
      const decodedToken = await jwtDecode(token);

      console.log(decodedToken);
      setUser(decodedToken);
      setIsLoggedIn(true);
      
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
        <label className="form-label" htmlFor="login-email">Email</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          required
          id="login-email" 
          className="form-control" 
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="login-password">Password</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          id="login-password" 
          className="form-control" 
        />
      </div>
      <div className="row mb-4">
        <div className="col d-flex">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value="" 
              id="remember"
              name='remember'
              checked={checked}
              onChange={handleCheck}
              />
            <label className="form-check-label" htmlFor="remember"> Remember me </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Sign in</button>
    </form>
  );
};

export default LoginForm;
import { useState } from 'react';

const defaultFormFields = {
  email: '',
  password: ''
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [checked, setChecked] = useState(false);
  const { email, password } = formFields;

  // set dynamic handleChange for each input type
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };


  return (
    <form>
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
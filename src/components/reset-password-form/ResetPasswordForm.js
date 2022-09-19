import { useState } from 'react';

const defaultFormFields = {
  password: '',
  passwordConfirmation: ''
};

const ResetPasswordForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, passwordConfirmation } = formFields;

  // set dynamic handleChange for each input type
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <form>
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

export default ResetPasswordForm;
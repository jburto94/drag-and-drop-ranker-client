import { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <form>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="forgot-password-email">Email</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          required
          id="forgot-password-email" 
          className="form-control" 
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Send Verification</button>
    </form>
  );
};

export default ForgotPasswordForm;
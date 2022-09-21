import { useContext, useState } from 'react';
import { NotificationContext } from '../../context/NotificationContext';
import { forgotPassword } from '../../services/forgotPassword';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const { setNotification, setSuccess } = useContext(NotificationContext);

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await forgotPassword(email);
      setSuccess(true);
      setNotification(response.data.message);
      setEmail('');
    } catch (err) {
      setSuccess(false);
      setNotification(err.response.data.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
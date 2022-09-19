import { Link } from 'react-router-dom';
import LoginForm from '../login-form/LoginForm';
import ForgotPassword from './ForgotPassword';

const Login = () => {
  return (
    <div className="login container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <h1 className="mb-5">Login to your account</h1>
          <div className="login-form-container p-4 border rounded">
            <LoginForm />
            <div className="col mt-4">
              <Link to="/forgot-password" element={<ForgotPassword />}>Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
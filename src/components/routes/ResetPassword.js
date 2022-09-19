import { useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../reset-password-form/ResetPasswordForm";

const ResetPassword = () => {
  

  return (
    <div className="login container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <h1 className="mb-5">ResetPasswordForm a new account</h1>
          <div className="form-container p-4 border rounded">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
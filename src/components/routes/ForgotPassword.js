import ForgotPasswordForm from "../forgot-password-form/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="forgot-password container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <h1 className="mb-3">Forgot your password?</h1>
          <p className="mb-5">Enter your email to reset your password.</p>
          <div className="forgot-password-container p-4 border rounded">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ForgotPassword;
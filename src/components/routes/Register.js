import RegisterForm from "../register-form/RegisterForm";

const Register = () => {

  return (
    <div className="login container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <h1 className="mb-5">Register a new account</h1>
          <div className="form-container p-4 border rounded">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
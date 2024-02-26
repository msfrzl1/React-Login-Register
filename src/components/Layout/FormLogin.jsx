import { Link } from "react-router-dom";
import Form from "../Elements/Form/Form";
import Navbar from "../Fragments/Navbar";

const FormLogin = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100 bg-primary">
        <div className="mb-3 text-center text-white">
          <h1>Form Login</h1>
        </div>
        <div className="w-25 bg-white p-3 rounded shadow">
          <Form label="Email" type="email" name="email" placeholder="example123@gmail.com" />
          <Form label="Password" type="password" name="password" placeholder="********" />
          <p>
            Dont have an account?{" "}
            <Link to="/register" className="text-decoration-none fw-bold">
              Register
            </Link>
          </p>
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </>
  );
};

export default FormLogin;

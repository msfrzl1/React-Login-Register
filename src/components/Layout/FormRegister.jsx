import { Link } from "react-router-dom";
import Form from "../Elements/Form/Form";
import Navbar from "../Fragments/Navbar";

const FormRegister = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100 bg-primary">
        <div className="mb-3 text-center text-white">
          <h1>Form Register</h1>
        </div>
        <div className="w-25 bg-white p-3 rounded shadow">
          <Form label="Full Name" type="name" name="name" placeholder="Full Name" />
          <Form label="Email" type="email" name="email" placeholder="example123@gmail.com" />
          <Form label="Password" type="password" name="password" placeholder="********" />
          <Form label="Confirm Password" type="password" name="confirmPassword" placeholder="********" />
          <p>
            Alredy have an account?{" "}
            <Link to="/Login" className="text-decoration-none fw-bold">
              login
            </Link>
          </p>
          <button className="btn btn-primary w-100">Register</button>
        </div>
      </div>
    </>
  );
};

export default FormRegister;

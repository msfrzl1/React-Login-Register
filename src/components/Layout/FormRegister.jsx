import { Link } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import Label from "../Elements/Form/Label";
import Input from "../Elements/Form/Input";

const FormRegister = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100 bg-primary">
        <div className="mb-3 text-center text-white">
          <h1>Form Register</h1>
        </div>
        <div className="w-25 bg-white p-3 rounded shadow">
          <Label htmlFor="fullName">Full Name</Label>
          <Input type="name" name="name" id="name" placeholder="Full Name" />
          <Label htmlFor="email">Username</Label>
          <Input type="email" name="email" id="email" placeholder="example123@gmail.com" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="********" />
          <Label htmlFor="changePassword">Cange Password</Label>
          <Input type="password" name="cangePassword" id="changePassword" placeholder="********" />
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

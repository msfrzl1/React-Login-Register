import { Link } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import Input from "../Elements/Form/Input";
import Label from "../Elements/Form/Label";
import { useState } from "react";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100 bg-primary">
        <div className="mb-3 text-center text-white">
          <h1>Form Login</h1>
        </div>
        <div className="w-25 bg-white p-3 rounded shadow">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="example123@gmail.com" onChange={handleEmail} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="********" onChange={handlePassword} />

          {/* <Form label="Email" type="email" name="email" id="email" placeholder="example123@gmail.com" />
          <Form label="Password" type="password" id="password" name="password" placeholder="********" /> */}
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

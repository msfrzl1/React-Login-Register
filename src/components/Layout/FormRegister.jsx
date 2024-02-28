import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import Label from "../Elements/Form/Label";
import Input from "../Elements/Form/Input";
import { useState } from "react";
import axios from "axios";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    const data = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://reqres.in/api/register", data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setNotif("Register Success");
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
        
      })
      .catch((err) => {
        setLoading(false);
        setNotif(err?.response?.data?.error);
      });

    handleEmail("");
    handlePassword("");
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100 bg-primary">
        <div className="mb-3 text-center text-white">
          <h1>Form Register</h1>
        </div>
        <div className="w-25 bg-white p-3 rounded shadow">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="example123@gmail.com" value={email} onChange={handleEmail} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="********" value={password} onChange={handlePassword} />
          <p>
            Alredy have an account?{" "}
            <Link to="/Login" className="text-decoration-none fw-bold">
              login
            </Link>
          </p>
          <button className="btn btn-primary w-100" onClick={handleRegister}>
            {loading ? "Loading..." : "Register"}
          </button>
          {notif && (
            <div className={`alert ${notif === "Register Success" ? "alert-success" : "alert-danger"} mt-3`} role="alert">
              {notif}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormRegister;

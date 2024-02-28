import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import Input from "../Elements/Form/Input";
import Label from "../Elements/Form/Label";
import { useState } from "react";
import axios from "axios";

const FormLogin = () => {
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

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.token);
        setNotif("Login Success");
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        setTimeout(() => {
          if (token) {
            navigate("/user");
          }
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setNotif(err?.response?.data?.error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100">
        <div className="mb-3 text-center text-white">
          <h1 className="fw-bold bg-black p-2 rounded">Form Login</h1>
        </div>
        <div className="w-25 bg-white p-3 rounded shadow">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="example123@gmail.com" onChange={handleEmail} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="********" onChange={handlePassword} />
          <p>
            Dont have an account?{" "}
            <Link to="/register" className="text-decoration-none fw-bold">
              Register
            </Link>
          </p>
          <button className="btn btn-primary w-100" onClick={handleLogin}>
            {loading ? "Loading..." : "Login"}
          </button>
          {notif && (
            <div className={`alert ${notif === "Login Success" ? "alert-success" : "alert-danger"} mt-3`} role="alert">
              {notif}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormLogin;

import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import Input from "../Elements/Form/Input";
import Label from "../Elements/Form/Label";
import { useState } from "react";
import axios from "axios";
import Title from "../Elements/Title/Title";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
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
        setNotif(err?.response?.data?.error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container-login p-5 bg-light">
        <div className="row g-0 rounded">
          <div className="col-md-7">
            <img src="/login.jpeg" className="img-fluid rounded-start" alt="Image Login" />
          </div>
          <div className="col-md-5 bg-white rounded-end shadow p-4 d-flex flex-column justify-content-center">
            <form>
              <Title title="Login Page" />
              <div className="mb-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="example123@gmail.com" onChange={handleEmail} />
              </div>
              <div className="mb-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="********" onChange={handlePassword} />
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
              <div className="text-center mt-3">
                Dont have an account?{" "}
                <Link to="/register" className="text-decoration-none fw-bold">
                  Register
                </Link>
              </div>
              {notif && (
                <div className={`alert ${notif === "Login Success" ? "alert-success" : "alert-danger"} mt-3`} role="alert">
                  {notif}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;

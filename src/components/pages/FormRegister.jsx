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
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
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
      <div className="container-login p-5 bg-light">
        <div className="row g-0 rounded">
          <div className="col-md-7">
            <img src="/register.jpeg" className="img-fluid rounded-start" alt="Image Register" />
          </div>
          <div className="col-md-5 bg-white rounded-end shadow p-4 d-flex flex-column justify-content-center">
            <form>
              <h1 className="card-title text-center fw-bold">Form Register</h1>
              <div className="mb-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="example123@gmail.com" onChange={handleEmail} />
              </div>
              <div className="mb-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="********" onChange={handlePassword} />
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleRegister} disabled={loading}>
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>
              <div className="text-center mt-3">
                Alredy have an account?{" "}
                <Link to="/login" className="text-decoration-none fw-bold">
                  Login
                </Link>
              </div>
              {notif && (
                <div className={`alert ${notif === "Register Success" ? "alert-success" : "alert-danger"} mt-3`} role="alert">
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

export default FormRegister;

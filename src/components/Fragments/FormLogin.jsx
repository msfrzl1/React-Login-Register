import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../utils/api.js";
import Account from "../Elements/Account.jsx";
import FormInput from "../Elements/Form/index.jsx";

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

  const handleLogin = (e) => {
    const payload = {
      email: email,
      password: password,
    };
    e.preventDefault();
    login(payload, navigate, setLoading, (message) => {
      setNotif(message);
      setTimeout(() => {
        setNotif("");
      }, 1000);
    });
  };

  return (
    <div className="container-login px-3 pt-5">
      <div className="d-flex justify-content-center text-center">
        {notif && (
          <div className={`alert ${notif === "Login Success" ? "alert-success" : "alert-danger"} position-absolute top-50 p-3 w-50`} role="alert">
            {notif}
          </div>
        )}
      </div>
      <div className="row g-0 rounded d-flex justify-content-center">
        <div className="col-md-4">
          <img src="/login.jpeg" alt="image login" className="h-100" />
        </div>
        <div className="col-md-6 bg-white rounded-end shadow overflow-hidden px-5 pb-5 d-flex flex-column">
          <Account text="Don't" title="Register" />
          <div className="mb-3" onChange={handleEmail}>
            <FormInput label="Email" type="email" name="email" id="email" placeholder="example123@gmail.com" />
          </div>
          <div className="mb-3" onChange={handlePassword}>
            <FormInput label="Password" type="password" name="password" id="password" placeholder="********" />
          </div>
          <Link to="" className="text-decoration-none d-flex justify-content-end mb-3 ">
            Lupa Password?
          </Link>
          <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn border" onClick={handleLogin} disabled={loading}>
              <i className="bi bi-google me-2 text-danger"></i> Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

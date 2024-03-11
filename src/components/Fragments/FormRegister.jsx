import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../utils/api";
import Account from "../Elements/Account";
import FormInput from "../Elements/Form";

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

  const handleRegister = (e) => {
    const payload = {
      email: email,
      password: password,
    };
    e.preventDefault();
    register(payload, navigate, setLoading, (message) => {
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
          <div className={`alert ${notif === "Register Success" ? "alert-success" : "alert-danger"} position-absolute top-50 p-3 w-50`} role="alert">
            {notif}
          </div>
        )}
      </div>
      <div className="row g-0 rounded d-flex justify-content-center">
        <div className="col-md-4">
          <img src="/register.jpeg" alt="image login" className="h-100" />
        </div>
        <div className="col-md-6 bg-white rounded-end shadow overflow-hidden px-5 pb-5 d-flex flex-column">
          <Account text="Alredy" title="Login" />
          <div className="mb-3" onChange={handleEmail}>
            <FormInput label="Email" type="email" name="email" id="email" placeholder="example123@gmail.com" />
          </div>
          <div className="mb-3" onChange={handlePassword}>
            <FormInput label="Password" type="password" name="password" id="password" placeholder="********" />
          </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleRegister} disabled={loading}>
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;

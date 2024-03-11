/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Account = ({ text, title }) => {
  return (
    <div className="py-4">
      <h3>WELCOME BACK</h3>
      {text} have a account?{" "}
      <Link to={`/${title}`} className="text-decoration-none fw-bold">
        {title}
      </Link>
    </div>
  );
};

export default Account;

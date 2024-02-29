import { useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => setUser(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-user text-white pb-5">
      <Navbar />
      <div className="d-flex justify-content-center py-5 fw-bold">
        <h1 className="fw-bold bg-black p-2 rounded">User Page</h1>
      </div>
      <div className="row">
        {user.map((user) => (
          <div className="col-md-4 mb-3" key={user.id}>
            <div className="card h-100">
              <div className="card-image">
                <img src={user.avatar} alt="profile" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h1>
                    {user.first_name} {user.last_name}
                  </h1>
                  <Link to={`/`}>
                    <button className="btn btn-primary btn-sm w-50 mt-3">Show Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;

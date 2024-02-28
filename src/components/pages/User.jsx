import { useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setUser(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center py-5 fw-bold">
        <h1>User Page</h1>
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
                  <p>{user.email}</p>
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
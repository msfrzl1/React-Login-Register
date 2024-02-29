import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";

const UserDetail = () => {
  const [users, setUsers] = useState({});
  const { id } = useParams();

  const getUsersDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setUsers(res?.data?.data))
      .catch((err) => setUsers(err));
  };

  useEffect(() => {
    getUsersDetail();
  });

  return (
    <div className="text-white pb-5">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3" key={users?.id}>
            <div className="card">
              <div className="card-image">
                <img src={users?.avatar} alt="profile" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h1>
                    {users?.first_name} {users?.last_name}
                  </h1>
                  <p>{users?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

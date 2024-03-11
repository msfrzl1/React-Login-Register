import { useEffect, useState } from "react";
import { getUser } from "../../utils/api";
import Navbar from "../Fragments/Navbar";
import Card from "../Elements/Card/Card";

const UserPage = () => {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    getUser(setUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="text-white pb-5">
      <Navbar />
      <div>
        <h1>User</h1>
      </div>
      <div className="row">
        {user.map((user) => (
          <Card key={user?.id} src={user?.avatar} firstName={user?.first_name} lastName={user?.last_name} id={user?.id} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;

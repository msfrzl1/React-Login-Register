import { useEffect, useState } from "react";
import { getUser } from "../../utils/api";
import Navbar from "../Fragments/Navbar";
import Card from "../Elements/Card/Card";
import Title from "../Elements/Title/Title";

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
      <Title title="User Page" />
      <div className="row">
        {user.map((user) => (
          <Card key={user?.id} src={user?.avatar} firstName={user?.first_name} lastName={user?.last_name} id={user?.id} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;

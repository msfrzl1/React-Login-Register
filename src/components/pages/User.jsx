import { useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";
import axios from "axios";
import Card from "../Elements/Card/Card";
import Title from "../Elements/Title/Title";

const UserPage = () => {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUser(res?.data?.data);
      })
      .catch((err) => {
        setUser(err?.message);
      });
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

import axios from "axios";

export const login = async (payload, navigate, setLoading, setNotif) => {
  try {
    const res = await axios.post("https://reqres.in/api/login", payload);
    setLoading(false);
    const token = res?.data?.token;
    localStorage.setItem("access_token", token);
    setNotif("Login Success");
    setTimeout(() => {
      if (token) {
        navigate("/user");
      }
    }, 1000);
  } catch (err) {
    setLoading(false);
    setNotif(err?.response?.data?.error);
  }
};

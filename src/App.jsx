import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Layout/Home";
import UserPage from "./components/Layout/User";
import FormLogin from "./components/Layout/FormLogin";
import FormRegister from "./components/Layout/FormRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

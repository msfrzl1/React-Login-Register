import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Layout/Home";
import UserPage from "./components/Layout/User";
import FormLogin from "./components/Layout/FormLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

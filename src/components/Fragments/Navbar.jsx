import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const listNavbar = [
    { path: "/home", title: "Home" },
    { path: "/user", title: "User" },
  ];

  const access_token = localStorage.getItem("access_token");
  console.log("token", access_token);

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {listNavbar.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link to={item.path} className="nav-link" aria-current="page">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {access_token ? (
                <Link to={"/home"} className="nav-link btn bg-primary text-white" aria-current="page" onClick={logout}>
                  Logout
                </Link>
              ) : (
                <Link to={"/login"} className="nav-link btn bg-primary text-white" aria-current="page">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

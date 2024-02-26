import { Link } from "react-router-dom";

const Navbar = () => {
  const listNavbar = [
    { path: "/home", title: "Home" },
    { path: "/user", title: "User" },
  ];

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
              <Link to={"/login"} className="nav-link btn bg-primary text-white" aria-current="page">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

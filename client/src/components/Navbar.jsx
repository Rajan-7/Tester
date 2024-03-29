import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container-nav container">
          <div className="brand">
            <NavLink to="/">EAGLE</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

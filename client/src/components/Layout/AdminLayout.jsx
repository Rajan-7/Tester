import { NavLink,Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <header className="admin">
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">News</NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">Blogs</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet/>
    </>
  );
};

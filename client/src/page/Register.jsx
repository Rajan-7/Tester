import { useState } from "react";
import Axios from "axios";

export const Register = () => {
  const [users, setusers] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setusers({
      ...users,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      const result = Axios.post("http://localhost:5009/api/form/register", {
        username: users.username,
        email: users.email,
        password: users.password,
      });
      setusers({ username: "", email: "", password: ""});
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="container">
          <h1 className="main-heading">Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
                value={users.username}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                value={users.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                value={users.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div>
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [users, setusers] = useState({
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
    try {
      const result = axios.post("http://localhost:5009/api/form/login", {
        email: users.email,
        password: users.password,
      });
      console.log(result);
      if (result) {
        alert("Login successful");
        setusers({ email: "", password: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="container-login">
          <h1 className="main-heading">Login Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
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
                value={users.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div>
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

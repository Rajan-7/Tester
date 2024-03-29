import { useState } from "react";

import axios from "axios";


const URL = "http://localhost:5009/api/data/services";

export const AdminService = () => {
 
  const [services, setServices] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setServices({
      ...services,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(services);
    try {
      const result = axios.post(URL, {
        name: services.name,
        description: services.description,
      });
      setServices({
        name: "",
        description: "",
      });
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="container">
          <h1 className="main-heading">Service Form</h1>
          <form onSubmit={handleSubmit} type>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                autoComplete="off"
                value={services.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                value={services.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

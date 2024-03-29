import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const URL = "http://localhost:5009/api/data/services";
const URB = "http://localhost:5009/api/blog/blogs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [blog,setBlog]=useState([]);
  const data = {
    name: "Hari",
  };

  const getServices = async () => {
    try {
      const response = await axios.get(URL);
      const servdata = response.data;
      setServices(servdata);
      // console.log(servdata);
    } catch (error) {
      console.log(`From frontend service:${error}`);
    }
  };

  // Fetching the data from the database
  const getBlog = async () => {
    try {
      const result = await axios.get(URB);
      const blogData = result.data;
      // console.log(blogData);
      setBlog(blogData);

    } catch (error) {
      console.log(`Error from the blog: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    getBlog();
  }, []);
  return (
    <AuthContext.Provider value={{ data, services,blog }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error(`AuthProvider is not properly managed in main.jsx`);
  }
  return contextValue;
};

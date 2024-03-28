import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const URL = "http://localhost:5009/api/data/services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const data = {
    name: "Hari",
  };

  const getServices = async () => {
    try {
      const response = await axios.get(URL);
      const servdata = response.data;
      setServices(servdata);
      console.log(servdata);
    } catch (error) {
      console.log(`From frontend service:${error}`);
    }
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <AuthContext.Provider value={{ data,services }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error(`AuthProvider is not properly managed in main.jsx`);
  }
  return contextValue;
};

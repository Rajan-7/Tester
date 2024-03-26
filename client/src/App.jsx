import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./page/Home";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

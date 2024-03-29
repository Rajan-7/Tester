import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./page/Home";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import { Navbar } from "./components/Navbar";
import { AdminLayout } from "./components/Layout/AdminLayout";
import { AdminService } from "./page/Admin-service";
import { Service } from "./page/Service";
import { AdminBlogs } from "./page/Admin-blogs";
import { Blogs } from "./page/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="services" element={<AdminService />} />
            <Route path="blogs" element={<AdminBlogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

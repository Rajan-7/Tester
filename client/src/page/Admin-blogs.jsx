import { useState } from "react";

import axios from "axios";
import path from "path";

const URL = "http://localhost:5009/api/blog/blogs";

export const AdminBlogs = () => {
  const [blogs, setBlogs] = useState({
    image: "",
    name: path.extname(file.originalname),
    description: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    // console.log(name);
    const value = e.target.value;
    // console.log(value);
    // console.log(getFileName(value));
    setBlogs({
      ...blogs,
      [name]: value,
    });
  };

  // function getFileExtension(filename) {
  //   const extension = filename.split(".").pop();
  //   return extension;
  // }

  // const  getFileName = (event)=>{
  //   const files = event.target.files;
  //   const fileName = files[0].name;
  //   return fileName;
  // }

  //  handleSelectedFile = event => {
  //    this.setState({
  //     selectedFile:event.target.files,
  //     selectedFName:event.target.files.name
  //    })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("image", blogs);
      const response = await axios.post(URL, {
        header: {
          "Content-Type":"multipart/form-data",
        },
        name: blogs.name,
        description: blogs.description,
        image: blogs.image,
      });
      // console.log(response);
      // console.log(for);
      setBlogs({ image: "", name: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="container">
          <h1 className="main-heading">Blogs Form</h1>
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Enter your image"
                required
                multiple
                autoComplete="off"
                value={blogs.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                autoComplete="off"
                value={blogs.name}
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
                value={blogs.description}
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

import { useState } from "react";

import axios from "axios";
// import path from "path";

const UIR = "http://localhost:5009/api/image/images";

const URL = "http://localhost:5009/api/blog/blogs";

export const AdminBlogs = () => {
  const [blogs, setBlogs] = useState({
    image: "",
    name: "",
    description: "",
  });

  const [img, setImg] = useState([]);
  console.log(img);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("image", img);
      console.log("++",img.name);
      console.log("----", formdata);
      // const imageResponse = await axios.post(UIR, formdata,{
      //   header:{
      //     "Content-Type":"multipart/form-data"
      //   }
      // });
      const imageResponse=await axios({
        url:UIR,
        data:formdata,
        method:"post",
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      console.log(imageResponse);
      const response = await axios.post(URL, {
        name: blogs.name,
        description: blogs.description,
        image: imageResponse.data.url,
      });
      console.log(imageResponse.data.url);
      // console.log(response);
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
            // method="POST"
            // encType="multipart/form-data"
          >
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Enter your image"
                required
                accept="image"
                autoComplete="off"
                onChange={(e) => setImg(e.target.files[0])}
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

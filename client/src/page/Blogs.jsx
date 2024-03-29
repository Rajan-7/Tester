import { useAuth } from "../store/auth";

export const Blogs = () => {
  const { blog } = useAuth();

  return (
    <>
      <section className="blog-section">
        <div className="container">
          <h1>Blogs</h1>
        </div>
        <div className="conatainer grid grid-three-cols">
          {blog.map((c, i) => {
            return (
              <div className="card" key={i}>
                <div className="card-image">
                  <img
                    src={`http://localhost:5009/image/${c.image}`}
                    alt="Team project"
                    height="250"
                    width="250"
                  />
                </div>
                <div className="card-details">
                  <h2>{c.name}</h2>
                  <p>{c.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

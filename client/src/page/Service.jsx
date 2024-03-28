import { useAuth } from "../store/auth";
export const Service = () => {
  const { services } = useAuth();
  console.log(services);
  return (
    <>
      <section className="service">
        <div className="container">
          <h1>Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((cur, ind) => {
            return (
              <div className="card" key={ind}>
                <div className="card-image">
                  <img
                    src="/image/webdev.png"
                    alt="Team work in project"
                    height="250"
                    width="250"
                  />
                </div>
                <div className="card-details">
                  <h2>{cur.name}</h2>
                  <p>{cur.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

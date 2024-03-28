const connectDb = require("../utils/db");

const services = async (req, res) => {
  try {
    const { name, description } = req.body;
    const servconn = await connectDb();
    servconn.query(
      "INSERT INTO services(name,description) values(?,?)",
      [name, description],
      (err, serv) => {
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(200).json({ serv });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getServices = async (req, res) => {
  try {
    const servconn = await connectDb();
    servconn.query("SELECT * FROM services", (err, response) => {
      if(err){
        res.status(500).json({error:"Internal server error"});
      }else{
        res.status(200).json(response)
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {services,getServices};

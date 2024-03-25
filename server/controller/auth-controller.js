const connectDb = require("../utils/db");

const home = async (req, res) => {
  try {
    res.status(200).send("To mysql Databases");
  } catch (error) {
    console.log(error);
  }
};

const employeeInfo = async (req, res) => {
  try {
    const connection = await connectDb();
    connection.query("SELECT * FROM employee", (err, rows) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json({ message: rows });
        console.log(rows);
      }
    });
    connection.release();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const employeeId = async (req, res) => {
  try {
    const connection = await connectDb();
    connection.query(
      "SELECT * FROM employee WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(200).json({ message: rows });
          console.log(rows);
        }
      }
    );
    connection.release();
  } catch (error) {}
};

const employeeDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await connectDb();
    connection.query(
      "DELETE FROM employee WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(200).json({ message: `${id} id Deleted` });
        }
      }
    );
    connection.release();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const employeeInsert = async (req, res) => {
  try {
    const empData = req.body;
    const data = [empData.name, empData.salary];
    const connection = await connectDb();
    connection.query(
      "INSERT INTO employee (name,salary) values(?)",
      [data],
      (err, rows) => {
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        }else{
            res.status(200).json({Inserted:rows});
        }
      }
    );
    connection.release();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { home, employeeInfo, employeeId, employeeDelete,employeeInsert };

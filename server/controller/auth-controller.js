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
    // const data = [empData.name, empData.salary];
    const connection = await connectDb();
    connection.query(
      "INSERT INTO employee (name,salary) values(?,?)",
      [empData.name, empData.salary],
      (err, rows) => {
        connection.release();
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        } else {
          console.log("New emplyee inserted", rows);
          res.status(200).json({ Inserted: rows });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const employeeUpdate = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id;
    const connection = await connectDb();
    connection.query(
      "UPDATE employee SET ? where id=?",
      [data, id],
      (err, rows) => {
        connection.release();
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(200).json({ message: `${id} id updated` });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const putMethod = async (req, res) => {
  try {
    const data = req.body;
    const connection = await connectDb();
    connection.query(
      "UPDATE employee set ? where id = ?",
      [data, data.id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result.affectedRows == 0) {
            connection.query(
              "INSERT into employee (name,salary) values(?,?)",
              [data.name, data.salary],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.status(200).json({ message: `New data inserted` });
                }
              }
            );
          }
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  home,
  employeeInfo,
  employeeId,
  employeeDelete,
  employeeInsert,
  employeeUpdate,
  putMethod,
};

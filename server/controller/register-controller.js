
const connectDb = require("../utils/db");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const regconn = await connectDb();

    // Checking if Email already exist
    const checkEmailExist = await new Promise((resolve, reject) => {
      regconn.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row.length > 0);
          }
        }
      );
    });

    if (checkEmailExist) {
      return res.status(200).json({ message: "Email already exist" });
    }

    // Hashing the password
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, saltRound);

    regconn.query(
      "INSERT INTO users(username,email,password) values(?,?,?)",
      [username, email, hash_password],
      (err, reg) => {
        if (err) {
          // const length= hash_password.length;
          return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(200).json({ register: reg });
      }
    );
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const regconn = await connectDb();

    // Checking if email Exist or Not
    const userExist = new Promise((resolve,reject)=>{
        regconn.query("SELECT * FROM users WHERE email = ?",[email],(err,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res)
            }
        })
    })

    const exists = await userExist;

    if (!exists.length) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Comparing the password
    const isPasswordValid = await bcrypt.compare(password, exists[0].password);

    // Generating the token
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          email: exists[0].email,
        },
        process.env.SECRET,
        {
          expiresIn: "30d",
        }
      );
      res.status(200).json({ message: "Login successful", token: token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
    regconn.release();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };

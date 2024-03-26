require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
const authCred = require('./router/register-router');
const connectDb = require("./utils/db");

app.use(cors());

app.use(express.json());

// Mounting the Routers
app.use('/api/auth', authRoute);
app.use('/api/form',authCred);

const PORT = process.env.PORT || 5010;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});

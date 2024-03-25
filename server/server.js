require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router')
const connectDb = require("./utils/db");

app.use(express.json());

// Mounting the Routers
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5010;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});

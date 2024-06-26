require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();

app.use('/image',express.static('image'));

const authImg = require('./router/image-router');
const authBlog = require('./router/blog-router');
const authRoute = require('./router/auth-router');
const authCred = require('./router/register-router');
const authService = require('./router/service-router');
const connectDb = require("./utils/db");

app.use(cors());

app.use(express.json());

// Mounting the Routers
app.use('/api/auth', authRoute);
app.use('/api/form',authCred);
app.use('/api/data',authService);
app.use('/api/blog',authBlog);
app.use('/api/image',authImg);

const PORT = process.env.PORT || 5010;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});

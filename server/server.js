const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to our website");
});
app.get("/register",(req,res)=>{
    res.status(200).send("Register your data here!");
});


const PORT = 5001;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})
const connectDb = require("../utils/db");

const register = async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const regconn = await connectDb();
        regconn.query("INSERT INTO users(username,email,password) values(?,?,?)",[username,email,password],(err,reg)=>{
            if(err){
                res.status(500).json({error:"Internal server error"});
            }else{
                res.status(200).json({register:reg});
            }
        })
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports = register;
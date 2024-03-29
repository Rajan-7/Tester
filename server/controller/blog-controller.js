const connectDb = require("../utils/db");

const blog = async(req,res)=>{
    try {

        // Query sections
        
        const {name,image,description}=req.body;
        const blogconn = await connectDb();
        blogconn.query('INSERT INTO blogs(image,name,description) values(?,?,?)',[image,name,description],(err,response)=>{
            if(err){
                res.status(500).json({error:response});
            }else{
                res.status(201).json({Blog:response})
            }
        })
    } catch (error) {
        console.log("From blog"+error);
    }
}

const blogGet = async(req,res)=>{
    try {
        const {name,image,description}=req.body;
        const blogconn = await connectDb();
        blogconn.query("SELECT * FROM blogs",(err,resp)=>{
            if(err){
                res.status(500).json({error:"Internal server error"});
            }else{
                res.status(200).json(resp)
            }
        })
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports = {blog,blogGet}
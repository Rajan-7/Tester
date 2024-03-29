
const imageUpload = (req,res)=>{
    if(req.file.filename){
        res.status(200).json({
            message:"Image upload successfully!",
            url:req.file.filename
        })
    }else{
        res.status(500).json({
            message:"Internal server error"
        })
    }
}



module.exports = imageUpload;
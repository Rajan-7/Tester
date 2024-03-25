const mysql = require('mysql2');

const dbConfig = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.PASSWORD
}

async function connectDb(){
    return new Promise((resolve,reject)=>{
        const pool = mysql.createPool(dbConfig);
        pool.getConnection((err,connection)=>{
            if(err){
                console.error(`Error Connecting Database/mysql ${err}`);
                reject(err);
                return;
            }
            console.log("Connected to mysql");
            resolve(connection);
        })
    })
}

module.exports = connectDb;
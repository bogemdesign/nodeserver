var mysql = require("mysql");

const conn = mysql.createConnection({
  host :"localhost",
  user :"root",
  password : "bogemera13",
  database :"dbcoffeshop"
});

conn.connect((err)=>{
  if(err)throw err;
  console.log("mysql sudah terkoneksi");
  
});

module.exports = conn;
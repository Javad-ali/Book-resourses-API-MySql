
const mysql = require('mysql');

// const pool = createPool({
//   port:process.env.DB_PORT,
//   host:process.env.DB_HOST,
//   user:process.env.DB_USER,
//   password:process.env.DB_PASS,
//   database:process.env.MYSQL_DB,
//   connectionLimit:10
// });

// module.exports = pool;
 let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB
 })
 connection.connect((err)=>{
  if(err) throw err;
  console.log('connected to mysql');
 })
// module.exports = {
//   db: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.MYSQL_DB
//   },
//   jwt: {
//     secret:process.env.JWT 
//   }
// };
module.exports = connection
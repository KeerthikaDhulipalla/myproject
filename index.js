


// const sql = require('msnodesqlv8');
// const connectionString = "server=.; Database=capstone;Trusted_Connection=yes;Driver=(SQL Server Native Client 11.0)";
// const query = " select * from Users;";
// sql.query(connectionString,query,(err,rows) =>{
//   console.log(rows);
// });


const sql = require('mssql');

var config = {
  user: "admin2",
  password: '123456',
  server: 'localhost', // or the correct hostname/IP address
  port: 1433, // or the correct port number
  database: 'capstone',
  options: {
    trustedconnection: true,
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

async function Conn(){
await sql.connect(config, async function(err) {
  if (err) {
    console.log(err);
  } else {
    var request = new sql.Request();
    await request.query('SELECT * FROM Users', function(err, records) {
      if (err) {
        console.log(err);
      } else {
        console.log(records.recordset);
      }
      sql.close();
    });
  }
});
};

Conn();








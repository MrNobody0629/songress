var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hacker22",
  database: "songs"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM bollywood", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
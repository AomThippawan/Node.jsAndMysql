var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    
    var sql = `SELECT * FROM Customers ORDER BY name`;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

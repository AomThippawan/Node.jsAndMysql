var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    
    var sql = `UPDATE Customers SET address = 'Canyon 123' WHERE name = 'Jason'`;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + "records updated");
    });
});

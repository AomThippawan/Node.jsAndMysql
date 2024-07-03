var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    
    var sql = `CREATE TABLE Customers (
        id int auto_increment primary key,
        Name varchar(20) not null,
        address varchar(100)
    )`;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    
    var sql = `INSERT INTO Customers (Name, address) VALUES ?`;
    var values = [
        ['Jason', 'Highway 37'],
        ['Jagg', 'Highway 38'],
        ['Jingg', 'Highway 39'],
        ['Jogg', 'Highway 40'],
        ['Jugg', 'Highway 41'],
    ];
    
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Customers created");
    });
});

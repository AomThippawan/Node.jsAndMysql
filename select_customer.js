var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    
    var sql = `SELECT * FROM Customers`;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        result.forEach((row)=>{
            console.log(`
                id:${row[`id`]},
                name:${row[`Name`]},
                address:${row[`address`]},
            `);
        })
    });
});

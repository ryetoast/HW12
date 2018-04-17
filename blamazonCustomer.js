var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'temp',
    database: 'blamazon'
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('connected as id' + conn.threadId);

    function readProducts() {
        console.log("Selecting all products...\n");
        conn.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            //conn.end();
        });
    }
    readProducts();
});

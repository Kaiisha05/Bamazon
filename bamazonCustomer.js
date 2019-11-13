var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection for the sql database
var connection = mysql.createConnection({
host: "localhost",
// everyone uses port 3000...
port: 3003,

// username...
password: "docker",
database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
shop();
});

function shop() {
inquirer.prompt({

})

}
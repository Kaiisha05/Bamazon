var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create connection for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    // everyone uses port 3000...
    port: 3003,

    // username...
    password: "password",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);


    shop();
});

function shop() {
    inquirer.prompt({
        type:"confirm",
        name:"continue",
        message:"Hi, how may I help you?"
    })
    .then(response => {
        if (response.continue) {
            console.log("Let me  verify our inventory");
            showInventory();
        } else {
            endTransaction();
        }
    });
}
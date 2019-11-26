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

connection.connect(function (err, res) {
    if (err) throw err;
    var table = new Table({
        head: ["Item_ID", "Product", "Price"]
      , colWidths: [100, 200, 100]
    });
     
    // Display the table within CLI
   for (var i=0; i < res.length; i++) {
        table.push([res[i].products.item_id, res[i].products.product_name, res[i].products.price]);

        console.log(table.toString()) 
     };
     shop();
    });

function shop() {
    inquirer.prompt([{
        type:"continue",
        name:"Item ID",
        message:"Hi, what item are you looking to purchase today?"
    },
    {
        type:"input",
        name:"Quantity",
        message:"How many would you like to purchase?"
    }
])
    .then(response => {
        if (response.continue) {
            console.log("Let me verify our inventory");
            showInventory();
        } else {
            endTransaction();
        }
    });
}

function showInventory() {

}
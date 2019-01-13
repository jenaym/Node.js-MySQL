
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

//Create a connection to mySQL and specify the Database in mySQL that you want to connect to
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,

    user: process.env.DB_USER,

    password: process.env.DB_PASS,
    //Specific Database in mySQL that you want to connect to
    database: process.env.DB_NAME
});

connection.connect(function(err){
    if (err) {
        throw err;
    }

    //Running this application will first display all of the items 
    // available for sale. Include the ids, names, and prices of products for sale.
    connection.query('SELECT item_id, product_name, price FROM products', function(err, rows) {
        if(err) {
            throw err;
        }
        console.table(rows);
    })

    //The app should then prompt users with two messages.
    promptUser();

})

function promptUser() {
    inquirer
        .prompt([
        {
            name: "productID",
            type: "input",
            message: "Please enter the ID of the product you would like to buy",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        { 
            name: "units",
            type: "input",
            message: "How many units of the product would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
        ])
        .then(function(answer) {

            // check if your store has enough of the product to meet the customer's request.
            connection.query('SELECT stock_quantity, price FROM products WHERE ?', { item_id: answer.productID }, function(err, res) {
                if (err) throw err;

                for (var i = 0; i < res.length; i++) {
                    
                    // If order cannot be met, inform customer and prevent order from going through
                    if (res[i].stock_quantity < answer.units) {
                        console.log("Insufficient Quantity");
                        process.exit(-1);
                    }

                    var updatedUnits = res[i].stock_quantity - answer.units;

                    // Fulfill the customer's order and Update SQL database to reflect the remaining quantity
                    connection.query('UPDATE products SET ? WHERE ?', 
                        [ 
                            { stock_quantity: updatedUnits },
                            { item_id: answer.productID }
                        ],
                        function(error) {
                            if(error) throw error;
                        }
                    )

                    var orderPrice = answer.units * res[i].price;
                    //Once the update goes through, show the customer the total cost of their purchase.
                    console.log("Your order was successfully placed!")
                    console.log("Total cost: $" + orderPrice);
                }
            })

        })

}


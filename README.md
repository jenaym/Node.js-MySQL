# Node.js-MySQL

## Overview:
Bamazon is a simple command line node application that mimics a department storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package, npm [mySQL](https://www.npmjs.com/package/mysql) package, and the mySQL database backend. Upon running the application, the customer interface displays a table list of all items for sale and each item's respective item ID number, product name, and unit price. The customer is then prompted with the following two messasges:
    * Please enter the ID of the product you would like to buy:
    * How many units of the product would you like to buy? 
Once completed, the mySQL database confirms if there are sufficient units in stock of the desired item to fill the customer's order. If the order can be completed, the new stock quantity is updated in the mySQL database, and the customer receives a message that their order has been successfully placed and is shown the total cost of the order. If the desired quantity is not available the order is not processed, and the customer is notified of the insufficient quantity.

## Demo Video Links:
  * Successful Order: https://drive.google.com/file/d/1hDIpzx6x5E84KJa99gLFNCAe5jkMjuvT/view
  * Unsuccessful Order: https://drive.google.com/file/d/1CPWURh66rnZEVwEqKEXal4xWikTY05fh/view

## Technologies Used:
- Node.js
- JavaScript
- mySQL
- inquirer
  
## Before Beginning:
  ### MySQL Database Setup
   1. Check that you have mySQL and mySQL Workbench installed on your personal machine.
      * Directions to install mySQL can be found [here](https://dev.mysql.com/doc/refman/5.6/en/installing.html) if your               machine does not have it already installed.
   2. Create the *Bamazon* database and the *products* table by running the SQL code found in [Bamazon.sql](https://github.com/jenaym/Node.js-MySQL/blob/master/bamazon.sql) in the mySQL Workbench.
 ### Install Application to your Personal Machine
    git clone https://github.com/jenaym/Node.js-MySQL.git
    cd Node.js-MySQL
    npm install
    node bamazon.js
 ### Create an .env file in your project's directory to store your personal mySQL login credentials
  * Your .env sound be set out as such:

        DB_HOST="your personal host name"
        DB_USER="your personal root name"
        DB_PASS="your personal mysql password"
        DB_NAME=bamazon
  
  ### Create a .gitignore file to prevent the following files from being committed to GitHub:
        node_modules
        .env

## Author:
  Jenay McAuley

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'huydo',
    password: 'Huydothe1999@',
    database: 'demo2',
    charset: 'utf8_general_ci'
});

connection.connect(function (err){
    if(err){
        throw err.stack;
    }else {
        console.log('Connect success')
    }
});

// const createTable = "create table if not exists newProduct(id int auto_increment primary key, name varchar(100), price float);";
// connection.query(createTable, function (err, result) {
//     if (err) throw err;
//     console.log("create success");
// });

const sqlDrop = "DROP TABLE IF EXISTS newProduct";
connection.query(sqlDrop, function (err, result) {
    if (err) throw err;
    console.log("Drop table success");
});

const alterProduct = "alter table products add column age int default 30;";
connection.query(alterProduct, function (err, result) {
    if (err) throw err;
    console.log("alter table success");
});
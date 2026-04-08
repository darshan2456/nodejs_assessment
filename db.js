const mysql=require('mysql2');
require('dotenv').config();

const connection=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err)=>{
    if(err){
        console.error("Database Connection Failed: ", err.message);
        return;
    }
    console.log("Connected to MySQL database");
});

connection.query(`
    CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
    )
`, (err) => {
    if (err) console.error('Table creation failed:', err.message);
    else console.log('Schools table ready');
});

module.exports=connection.promise();
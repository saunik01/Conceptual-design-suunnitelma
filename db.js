import mysql from 'mysql2';

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost', // or the host of your MySQL server
    user: 'root', // replace with your MySQL username
    password: '', // replace with your MySQL password if any
    database: 'movies_db' // Correct database name
});

// Check if the connection is successful
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err.stack);
        return;
    }
    console.log('Connected to the database');
});

export default connection;

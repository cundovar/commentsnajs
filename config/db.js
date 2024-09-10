// config/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
// Connecter à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.message);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

module.exports = db;

const mysql = require('mysql');

// Créer une connexion
const connection = mysql.createConnection({
  host: 'egflbugcundo.mysql.db', // Remplacez par l'hôte OVH
  user: 'egflbugcundo',               // Votre nom d'utilisateur MySQL
  password: 'Kryska10',              // Votre mot de passe MySQL
  database: 'egflbugcundo' // Le nom de la base de données
});

// Tester la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion : ' + err.stack);
    return;
  }
  console.log('Connexion réussie en tant que ' + connection.threadId);
  
  // Si la connexion réussit, on peut faire des requêtes ou fermer la connexion
  connection.end(); // Fermer la connexion après le test
});

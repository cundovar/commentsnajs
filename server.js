// server.js
require('dotenv').config();
const express = require('express');
const commentRoutes = require('./routes/commentRoutes');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json()); // Pour parser les requêtes JSON
app.use('/comments', commentRoutes);

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});

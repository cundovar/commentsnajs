const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importer cors
const Comment = require('./models/comment');
require('dotenv').config();

const app = express(
);

// Middleware pour activer CORS
app.use(cors(
    
   {origin: 'http://localhost:3000'}
));

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB Atlas'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Routes CRUD pour les commentaires
app.post('/comments', async (req, res) => {
  const { content } = req.body;
  try {
    const newComment = await Comment.create({ content });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du commentaire', error });
  }
});

app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', error });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

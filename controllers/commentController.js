// controllers/commentController.js
const Comment = require('../models/comment');

exports.getAllComments = (req, res) => {
    Comment.getAllComments((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des commentaires' });
        }
        res.json(results);
    });
};

exports.getCommentById = (req, res) => {
    const { id } = req.params;
    Comment.getCommentById(id, (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ error: 'Commentaire non trouvé' });
        }
        res.json(results[0]);
    });
};

exports.addComment = (req, res) => {
    const { content, author } = req.body;
    if (!content || !author) {
        return res.status(400).json({ error: 'Contenu et auteur sont requis' });
    }
    Comment.addComment({ content, author }, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de l\'ajout du commentaire' });
        }
        res.status(201).json({ id: results.insertId, content, author });
    });
};

exports.updateComment = (req, res) => {
    const { id } = req.params;
    const { content, author } = req.body;
    if (!content || !author) {
        return res.status(400).json({ error: 'Contenu et auteur sont requis' });
    }
    Comment.updateComment(id, { content, author }, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la mise à jour du commentaire' });
        }
        res.status(200).json({ message: 'Commentaire mis à jour avec succès' });
    });
};

exports.deleteComment = (req, res) => {
    const { id } = req.params;
    Comment.deleteComment(id, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la suppression du commentaire' });
        }
        res.status(200).json({ message: 'Commentaire supprimé avec succès' });
    });
};

// models/comment.js
const db = require('../config/db');

module.exports = {
    getAllComments: (callback) => {
        db.query('SELECT * FROM comments', callback);
    },
    getCommentById: (id, callback) => {
        db.query('SELECT * FROM comments WHERE id = ?', [id], callback);
    },
    addComment: (comment, callback) => {
        db.query('INSERT INTO comments (content, author) VALUES (?, ?)', [comment.content, comment.author], callback);
    },
    updateComment: (id, comment, callback) => {
        db.query('UPDATE comments SET content = ?, author = ? WHERE id = ?', [comment.content, comment.author, id], callback);
    },
    deleteComment: (id, callback) => {
        db.query('DELETE FROM comments WHERE id = ?', [id], callback);
    }
};

const Author = require ("../controllers/author.controllers")

module.exports = function(app) {
    app.get("/api/authors", Author.allAuthors)
    app.post("/api/authors", Author.createAuthor)
    app.get("/api/authors/:id", Author.getAuthor)
    app.put("/api/authors/:id", Author.updateAuthor)
    app.delete('/api/authors/:id/', Author.deleteAuthor);
}
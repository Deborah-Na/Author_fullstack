const {Author}  = require('../models/author.models')

module.exports.allAuthors =(request, response)=>{
    Author.find({}).collation({locale:'en',strength: 2}).sort({name:1})

    .then(author => response.json(author))
    .catch(err=> response.json(err))
}

module.exports.createAuthor = (request, response) => {
    // const { name } = request.body;
    // Author.create({
    //     name
    // })
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.getAuthor = (request, response)=>{
    Author.findById(request.params.id)
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}

module.exports.updateAuthor = (request, response)=> {
    Author.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators: true})
    // Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response)=>{
    Author.findByIdAndDelete(request.params.id)
    .then(deleteResult => response.json(deleteResult))
    .catch(err => response.status(400).json(err))
}


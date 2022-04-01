const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name here!"],
        minlength: [3, "{PATH} must be at least 3 chars"]
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);



// const mongoose = require('mongoose');

// const AuthorSchema = new mongoose.Schema({
//     name: {
//         type:String,
//         required:[true, "Please put a valid name"],
//         minlength: [3, "{PATH} must be at least 3 chars"]
//     }
// }, {timestamps: true})

// module.exports.Author = mongoose.model('Author', AuthorSchema);
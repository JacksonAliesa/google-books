const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookScehma = new Schema ({
    title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  thumbnal: { type: String, required: true },
  href: { type: String, required: true, unique: true }

})

const Book = mongoose.model("Book", bookScehma);
module.exports = Book;
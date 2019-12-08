const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartoonSchema = new Schema({
    name: String,
    program: String
});

const Cartoon = mongoose.model('Cartoon', CartoonSchema);

module.exports = Cartoon;
const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    price: String,
    rating: String,
});
// mongoose.set('strictQuery', true);
// workSchema.set('strictQuery', false);
module.exports = mongoose.model('items', workSchema);

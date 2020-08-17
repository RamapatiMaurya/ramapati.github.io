const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/contact', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://RamapatiMaurya:Ramapati123@cluster0.cf6xo.mongodb.net/contact?retryWrites=true&w=majority', {useNewUrlParser: true});

var connection = mongoose.connection

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    remark: String
})

const ContactModel = mongoose.model('Contact', contactSchema)

module.exports = ContactModel
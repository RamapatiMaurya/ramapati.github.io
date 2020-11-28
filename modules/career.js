const mongoose = require('mongoose');
require('dotenv/config')
//mongoose.connect('mongodb://localhost:27017/contact', {useNewUrlParser: true});
 mongoose.connect('mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cf6xo.mongodb.net/career?retryWrites=true&w=majority',
  {useNewUrlParser: true}, ()=>{console.log('DB connected!')});

//mongoose.connect('mongodb+srv://RamapatiMaurya:Ramapati123@cluster0.cf6xo.mongodb.net/career?retryWrites=true&w=majority',
// {useNewUrlParser: true}, ()=>{console.log('DB connected!')});
var connection = mongoose.connection

const careerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    description: String,
    filename: String
})

const CareerModel = mongoose.model('careerprofile', careerSchema)

module.exports = CareerModel
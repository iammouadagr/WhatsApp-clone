const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    name: {
        type: String
    }

});
module.exports = mongoose.model('users',usersSchema)
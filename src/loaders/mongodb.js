const mongoose = require('mongoose');

mongoose.set(`strictQuery`, true)

async function startDB(){
    await mongoose.connect('sua-url-de-conexao-do-mongodb');
}

module.exports = startDB;
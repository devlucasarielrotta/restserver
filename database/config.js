const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('base de datos online')
    }catch(error){
        console.log(error);
        throw new Error('Error en la base de datos');
    }
}

module.exports = {
    dbConnection
}
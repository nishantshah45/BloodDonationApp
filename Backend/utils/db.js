const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./.env'})


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
       
        setTimeout(dbConnect,5000) ;// Exit process with failure
    }
};

module.exports = dbConnect;
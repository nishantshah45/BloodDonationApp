const app =require('./app');
const dotenv = require('dotenv');

const dbConnect = require('./utils/db');
dotenv.config({path:'./.env'});


const PORT = process.env.PORT ;

const DB = process.env.DB;


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    dbConnect();
});
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});


const register =async () =>{
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

}
   const loginUser =async() =>{
    try {
        const user = await User.find
        ({email:req.body.email});
        !user && res.status(401).json("Wrong credentials!");
        const hashedPassword = CryptoJS.AES.decrypt(
            user[0].password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials!");
        const accessToken = jwt.sign(
            {   
                id: user[0]._id,
                isAdmin: user[0].isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "10d" }
        );
        const { password, ...others } = user[0]._doc;
        res.status(200).json({ ...others, accessToken });
    }catch (err) {
        res.status(500).json(err);
    }
    };
module.exports = {register,loginUser};
  

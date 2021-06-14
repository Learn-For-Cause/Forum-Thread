// <--------------------------------------checking authentication of user using jsonwebtoken----------------------------------->

//NOTE: please install -> 1) npm i cookie-parser 2) npm i jsonwebtoken

const jwt = require('jsonwebtoken')
const User = require("../../server/models/userSchema")

const Authenticate = async (req, res, next)=>{
    try{
        const token = req.cookies.jwtoken;         /*we are getting the jwtoken from cookies and checking in our database that if token is exist it means user is genuine because he first registered in our database and then login and after login we create jwtoken for that user and verify that token is exist in our database or not if yes then authentication is completed and if not it will throw a error "unauthorised"*/

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);     //process.env.SECRET_KEY is just a secret unique key (you can use any secret key with minimum of 32letter and import it here from any config.env file or any other file)

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token})  //getting the data from our database

        if(!rootUser){
            throw new Error('User not found')
        }
        // eslint-disable-next-line require-atomic-updates
        req.token = token;  
        // eslint-disable-next-line require-atomic-updates
        req.rootUser = rootUser;
        // eslint-disable-next-line require-atomic-updates
        req.userID = rootUser._id;
        next();

    }catch(err){
        res.status(401).send('Unauthorized')
        console.log(err);
    }
}

module.exports = Authenticate;

// <----------------------------------------------------end-------------------------------------------------------->

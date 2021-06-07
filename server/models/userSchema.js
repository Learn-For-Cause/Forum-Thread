const mongoose = require('mongoose')
const validator = require('validator')
// NOTE : install bcryptjs using npm ----->( npm i bcryptjs )
const bcrypt = require('bcryptjs')
// NOTE : install jsonwebtoken using npm ----->( npm i jsonwebtoken )
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true,
      validate(value){
        if(!validator.isEmail(value))
        {
          throw new Error("Email is Invalid");
        }
      }
  },
  phone: {
      type: Number,
      required: true,
      unique: true
  },
  work: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true,
      minlength: 7,
      // validate(value){
      //   if(!validator.isAlphanumeric(value))
      //   {
      //     throw new Error("invalid password")
      //   }
      // }
  },
  confirmpassword:{
      type: String,
      required: true,
      minlength: 7,
      // validate(value){
      //   if(!validator.isAlphanumeric(value))
      //   {
      //     throw new Error("invalid password")
      //   }
      // }
  }
})

// NOTE : install bcryptjs using npm ----->( npm i bcryptjs )

//hashing the password using bcryptjs 
// .pre means before saving the data we are hashing it
userSchema.pre('save', async function(next){
  if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password, 12);
      this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
  }
  next();
});

//we are generating token using jsonwebtoken
userSchema.methods.generateAuthToken = async function(){
  try{
      let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({token: token});
      await this.save();
      return token;
  }catch(err){
      console.log(err);
  }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;

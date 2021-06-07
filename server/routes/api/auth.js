//NOTE : uncomment all code to use the functionality

// <---------------------------import userSchema and authenticate-------------------------------->
const User = require("../../models/userSchema");
const authenticate = require('../../middleware/authentication')
// <--------------------------------------------end------------------------------------------->

const bcrypt = require('bcryptjs')

//working (confirm using postman)
module.exports = app =>{
  
// <--------------------------------------------code for registration------------------------------------------->

// <--------------------------------using async method-------------------------------->
  app.post('/register', async (req, res)=>{

  const {name, email, phone, work, password, confirmpassword} = req.body;    //collecting the data from user

  if(!name || !email || !phone || !work || !password || !confirmpassword)  //checking all fields are filled or not
  {
      return res.status(422).json({error: "Please fill the all fields"});
  }
  try{
      const userExist = await User.findOne({email: email});    //checking the email in our database

      if(userExist)
      {
          return res.status(422).json({error: "Email already exist"}); //if exist it will throw  message "Email already exist"
      }
      else if(password != confirmpassword)    //checking password field and confirm password fields is same or not
      {
          return res.status(422).json({error: "password error"});    //if not throw a error "password error"
      }
      else
      {
        const user = new User({name, email, phone, work, password, confirmpassword});  //if email does not exist it will create a new user
        await user.save();                    //and  save it in our database
        res.status(201).json({message: "user registered"});  //and then throw a message "user registered"
      }
  }
  catch(err)    //just catching the error
  {
      console.log(err);
  }
});
// <--------------------------------------------end------------------------------------------->



// <--------------------------------------------code for signin or login------------------------------------------->
  app.post('/signin', async (req, res) => {

    try{
        const { email, password } = req.body;        //collecting the data from user
        if(!email || !password)                      //checking fields are empty or not
        {
            return res.status(400).json({error: "Fill the data"})
        }
        const userLogin = await User.findOne({email: email});    //find the email of user in our database
        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password, userLogin.password);    //checking the password is correct or not

            let token = await userLogin.generateAuthToken();     //generating the token

            console.log(token);

                //IMPORTANT
                //creating a token or jsonwebtoken and storing in cookies so you can access the jwtoken for authentication purpose
             res.cookie("jwtoken", token,{ 
             expires: new Date(Date.now() + 2592000000),  //2592000000 millisecond = (30 days)
             httpOnly: true
                })
            if(!isMatch)          //if password is not correct throw a message "Invalid Crediantials"
            {
                res.status(400).json({error: "Invalid Credientials"})
            }else{
                res.json({message: "User Sign in Successfully"})  //if both email & password are correct then throw a message "Sign in Successfully"
            }
        }else{
            res.status(400).json({message: "Invalid Credientials"})    //if email is not correct throw a message "Invalid Crediantials"
        }
    }
    catch(err){
        console.log(err);
    }
  })
// <--------------------------------------------end------------------------------------------->



  // <--------------------------checking authentication of user using middleware----------------------->

  // if user try to access other pages(example -> about, home etc. ) without login, it will throw an error
  //you can use any root here I just use '/about' 

  //"authenticate" is a middleware here
  app.get('/about', authenticate, (req, res) => {
    console.log(`about page`)
    res.send(req.rootUser)
  })
// <--------------------------------------------end------------------------------------------->

// <--------------------------------------------code for logout the page------------------------------------------->


  app.get('/logout', (req, res) => {
    console.log(`logout page`)

    //we saved the jwtoken in our cookies at the time of signin now we have to just clear that jwtoken, and if cookies does not contain the jwtoken for that user it means he can not access other pages without login (because of the authentication middleware) 
    res.clearCookie('jwtoken', {path:'/'})  //clearing the jwtoken from the cookies and sending the user to the home page


    //if status is 200 it means everything is going good, and we can use this status in our frontend for other purposes
    res.status(200).send('user logout') 
  })

}

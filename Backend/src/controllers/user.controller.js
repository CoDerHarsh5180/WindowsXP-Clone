import { User } from "../models/user.models.js";
import { Apierror } from "../utils/ApiErrorHandler.js";
import { Apiresponse } from "../utils/ApiresponseHandler.js";

const cookieOptions = {
     httpOnly:true,
     secure:true,
}

const generateAccessAndRefreshToken = async function (user){
     
     const accessToken = await user.generateAccessToken();
     const refreshToken = await user.generateRefreshToken();
     if(!accessToken || !refreshToken){
          throw new Apierror(500,"something went wrong")
     }
     user.refreshToken=refreshToken;
     await user.save({validateBeforeSave:false});
     return {refreshToken,accessToken}
}

const registerUser = async function(req,res){

     const {userName,email,password} = req.body

     if(!userName.trim()){
          throw new Apierror(400,"Username is required")
     }
     if(!email){
          throw new Apierror(400,"Email required")
     }
     if(!password){
          throw new Apierror(400,"Password is required")
     }
     const existeduser = await User.find({userName:userName}
     )
     
     if(existeduser.length>0){
          throw new Apierror(400,"User already exist with this username or email")
     }

    const registerdUser= await User.create({
          userName:userName,
          email:email,
          password:password,
     })

     if(!registerdUser){
          throw new Apierror(500,"Internal server error, register again")
     }

     const {refreshToken,accessToken} =await generateAccessAndRefreshToken(registerdUser)

     const user = await User.findById(registerdUser._id)

     if(!user){
          throw new Apierror(400,"internal server error")
     }

     res.status(200).cookie("accessToken",accessToken,cookieOptions).cookie("refreshToken",refreshToken,cookieOptions).json(
          new Apiresponse(200,user,"user registered successfully")
          
     )
}

const loginUser = async function(req,res){
     
          const {userName,password} = req.body
          if(!userName.trim() || !password.trim()){
               throw new Apierror(400,"username and password required")
          }

         const user =  await User.findOne({userName:userName});
         
          console.log(user)
         if(!user){
               throw new Apierror(404,"Unauthorized access")
         }
         console.log(user)

        const isPassCorrect =  await user.isPasswordCorrect(password)

         if(!isPassCorrect){
          throw new Apierror(404,"Incorrect password")
         }

         const {refreshToken,accessToken} = await generateAccessAndRefreshToken(user)

         const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

         if(!loggedInUser){
          throw new Apierror(500,"Internal server error")
         }

         res.status(200).cookie("accessToken",accessToken,cookieOptions).cookie("refreshToken",refreshToken,cookieOptions).json(
          new Apiresponse(200,loggedInUser,"user logged In Successfully")
         )

}

export {registerUser,loginUser}
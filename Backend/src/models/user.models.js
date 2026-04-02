import mongoose from "mongoose";

const userSchema = mongoose.Schema({
     userName:{
          type:String,
          required:true,
     },
     email:{
          type:String,
          required:true,
     },
     password:{
          type:String,
          required:true,
     },
     refreshToken:{
          type:String,
          required:true,
     },

}
,{
     timestamps:true,
})

export default User = mongoose.model("User",userSchema)
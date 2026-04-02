
import dotenv from 'dotenv'
dotenv.config({path:'./.env'})
import { app } from './app.js'
import connectDB from './db/index.js'


app.get('/',(req,res)=>{
     res.send("Hello i am backend server ")
})

app.listen(process.env.PORT)

connectDB()
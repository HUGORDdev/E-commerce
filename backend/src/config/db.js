import mongose from 'mongoose'
import{ENV} from './env.js'
import mongoose from 'mongoose'

// connect database
export const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log(`Connected to MONgODB :${conn.connection.host}`)
    }catch(error){
        console.error("MONGODB connection error")
        process.exit(1); //exit code 1 means failure , 0 means success

    }
}
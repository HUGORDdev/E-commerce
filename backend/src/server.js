import express from 'express'
import path from 'path'
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express'

const app = express()

const _dirname = path.resolve()

app.use(clerkMiddleware()) //req.auth

app.get('/app/health',(req,res) =>{
    res.status(200).json({message : "Success"})
});

// make our ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,'../admin/dist')))

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(_dirname,'../admin','dist','index.html'))
    });
}


app.listen(ENV.PORT,()=> {connectDB()})

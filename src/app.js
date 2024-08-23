import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" //it is used to access and set cookies of the browser

const app = express()

app.use(cors({         // "use" method is used for middlewares and configurations
    origin: process.env.CORS_ORIGIN,
    credentials: true         //what credentail to allow
}))

app.use(express.json({limit: "10 KB"}))     // to limit on the incomming json data so that server does'nt crash
app.use(express.urlencoded({extended: true, limit: "10KB"}))      //it encodes URL (special character, space etc)
// and makign extended true means now we can give object inside another object
app.use(express.static("public"))     //sometimes we want to store files/folder. Its not necessary to write "public" here. 
//We wrote because we have a folder in our structure namned "public", which stores static contents like images and all.
app.use(cookieParser())


//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)

export { app }
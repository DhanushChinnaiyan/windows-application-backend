const express = require("express");
const dotenv = require('dotenv');
const dbConnection = require("./db");
const cors = require('cors');
const userRouter = require("./Routers/UserEntry.js");
const appsRouter = require("./Routers/Apps_Handling_Router.js");
const userAuthentication = require("./Controller/User_Authentication");

const app = express()
// Dotenv configuration
dotenv.config()

// applying cors
app.use(cors())

// middlewares
app.use(express.json())

// db connection
dbConnection()

// Router
app.use("/api/user",userRouter)
app.use("/api/apps",userAuthentication,appsRouter)

// server listening
app.listen(process.env.PORT,()=>console.log(`Server listening on ${process.env.PORT} port`))
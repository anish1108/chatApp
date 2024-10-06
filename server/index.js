import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    console.log("this is home")
})

app.listen(port, ()=>{
    console.log("server is running")
})
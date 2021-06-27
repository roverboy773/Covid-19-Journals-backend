require('dotenv').config()
const express=require('express')
const app=express()
const port=5000||process.env.PORT
const cors=require('cors')
const path =require('path')

app.use(cors())
require('./DB/db')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'/upload')))

require('./Routes/route')(app)
app.use((req,res)=>{
    res.status(404).send('Page not Found')
})


app.listen(port,()=>console.log(`listening to port ${port}`))

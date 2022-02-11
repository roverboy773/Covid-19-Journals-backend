require('dotenv').config()
require('./DB/db')
const express=require('express')
const app=express()
const port=process.env.PORT || 5001
const cors=require('cors')
const blogRoutes=require('./Routes/blogRoutes/index.js')
// const path =require('path')
const corsOptions ={
    origin:['http://localhost:3000','https://adoring-mclean-dee50e.netlify.app','http://127.0.0.1:3000'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(express.static(path.join(__dirname,'/upload')))

app.get('/allJournals',blogRoutes().getAllBlogs)
app.get('/show-Blog/:uuid',blogRoutes().getIndiBlog)
app.post('/create-blog',blogRoutes().createBlog)
app.post('/update-views/:uuid',blogRoutes().updateViews)

// require('./Routes/route')(app)
// app.use((req,res)=>{
//     res.status(404).send('Page not Found')
// })


app.listen(port,()=>console.log(`listening to port ${port}`))

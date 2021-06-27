const mongoose =require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology:true,useCreateIndex:true})
.then((res)=>console.log('connected to database'))
.catch((e)=>console.log(e))

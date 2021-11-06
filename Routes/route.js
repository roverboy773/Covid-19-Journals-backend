
 const blogRoutes=require('./blogRoutes/index')
// const multer=require('multer')
// // const upload=require('../middleWare/upload/upload')
// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './upload');
//      },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
// });
// const upload=multer({storage:storage})

function routes(app){
  
    app.get('/allJournals',blogRoutes().getAllBlogs)
    app.get('/show-Blog/:uuid',blogRoutes().getIndiBlog)
    app.post('/create-blog',blogRoutes().createBlog)
    app.post('/update-views/:uuid',blogRoutes().updateViews)
}

module.exports=routes

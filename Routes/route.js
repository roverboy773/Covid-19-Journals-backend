
const blogRoutes=require('./blogRoutes/index.js')
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
  
    app.get('https://covid-19-journals.herokuapp.com/allJournals',blogRoutes().getAllBlogs)
    app.get('https://covid-19-journals.herokuapp.com/show-Blog/:uuid',blogRoutes().getIndiBlog)
    app.post('https://covid-19-journals.herokuapp.com/create-blog',blogRoutes().createBlog)
    app.post('https://covid-19-journals.herokuapp.com/update-views/:uuid',blogRoutes().updateViews)
}

module.exports=routes

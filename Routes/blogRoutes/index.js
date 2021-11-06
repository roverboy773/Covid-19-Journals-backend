const Blog = require('../../model/Blog')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

function blogRoutes() {
    return {
        async getAllBlogs(req, res) {
            console.log('getallblogs')
            const blogs = await Blog.find();
            console.log(blogs);
            if (blogs.length > 0)
                return res.status(200).json({ data: blogs })
            else return res.status(200).json({ data: 'Be the first to write Blog on own Platform' })
        },
        async getIndiBlog(req, res) {
            try {
                const blogUUID = req.params.uuid
                //console.log(blogID)
                const blog = await Blog.find({ uuid: blogUUID })

                if (blog) {
                    return res.status(200).json({ data: blog })
                }else{
                    return res.status(501).json({ msg: 'Some error occured while fetching or this jounal has been deleted' })
                }
            } catch (e) {
                console.log(e)
            }
        },
        async createBlog(req, res) {
            try {
              
               // console.log(req.body,req.file)
                const { author, heading, body, desc,image } = req.body

                const newBlog = new Blog({
                    author,
                    heading,
                    body,
                    description:desc,
                    uuid: uuidv4(),
                    image
                })
                const saved = await newBlog.save()
                if (saved) return res.status(200).json({ msg: "saved" })
                else return res.staus(501).json({ msg: 'Kindly try later' })
            } catch (e) {
                console.log(e)
            }
        },
         async updateViews(req,res){
             try{
            const blogUUID=req.params.uuid
            const result=await Blog.findOneAndUpdate({uuid:blogUUID},{$inc:{'views':1}},{new:true})

            if(result)
                return res.status(200).json({msg:'updated'})
             else return res.staus(300).json({msg:'couldnt update views'})
             }catch(e){
                 return res.staus(501).json({msg:'server error'})
             }
        },
    }
}

module.exports = blogRoutes

const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../views/index.html'))
    // this is because whithout handlebars we use folder templates which is views now and inside template we had this index.html as our homepage,but now we are using handlebars so use res.render()
    res.render('home');
})

// router.get('/blogs', (req, res) => {
//     res.sendFile(path.join(__dirname, '../templates/blogs.html'))
// }) now we are using handlebars so use res,render method

router.get('/blog', (req, res)=>{ 
    // res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
    res.render('blogHome', {
        //this code means render blogHome and we are passing the blogs we are gettig
        blogs: blogs
    });
})


//the below code is for blog post
//since we provided the slug in data/blogs.js so that we can get the blogs rendre on a common template
router.get('/blogpost/:slug', (req, res)=>{ 
    //below we use filter function to get our data and stored in myblog(a single entity)
    myBlog = blogs.filter((e)=>{
        //e.slug means the slug we have in data/blogs.js and comparing it with req.params.slug means the slug we are getting from url we use params for it
        return e.slug == req.params.slug
    })  
    console.log(myBlog)
    res.render('blogPage', {
        //here we are passing what we want so with res.render return the page means handlebars page and then what u want with second parameter
        //here why we use myBlog[0] because will get a single entity in myBlog variable everytime with filter method

        title: myBlog[0].title,
        src: myBlog[0].src,
        excerpt:myBlog[0].excerpt,
        content: myBlog[0].content,
        author:myBlog[0].author,
        date:myBlog[0].date,

    });
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})


module.exports = router
const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path')
const app = express()

// below tow line of code is for handlebars you can simply visit express-handlebars and open its github

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const port = 4000

app.use(express.static(path.join(__dirname,"../static/style.css")))

// app.get('/',(req,res)=>{
//     // res.json({"abhay":25})
//     // we can pass data in json format as well
//     // res.send('hi this is the homepage')
//     res.sendFile(path.join(__dirname,"index.html"))
// })


// app.get('/blogs',(req,res)=>{
//     res.send('welcome to the blog page')
// })

//here we are going to use routes now
app.use('/', require(path.join(__dirname, './routes/app.js')))


app.listen(port,()=>{
    console.log(`the app is running at http://localhost:${port}`)
})

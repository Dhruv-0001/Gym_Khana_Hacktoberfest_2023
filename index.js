const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path')
const dotenv = require('dotenv');
const app = express()

// below tow line of code is for handlebars you can simply visit express-handlebars and open its github
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
dotenv.config({ path: path.join(__dirname, 'config.env') });


const PORT = process.env.PORT || 8080;


app.set('views', path.join(__dirname, 'views'))
//here we are going to use routes now
app.use('/', require(path.join(__dirname, './routes/app.js')))


app.listen(PORT,()=>{
    console.log(`the app is running at http://localhost:${PORT}`)
})

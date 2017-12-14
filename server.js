const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use((req,res,next) => {
    var now = new Date().toString();

    console.log(`${now}: ${req.method}: ${req.url}`);
    next();
});

// in case of maintenance
/*
app.use((req,res,next) => {
   res.render('maintenance.hbs');
});
*/

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear() + 4;
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

app.get("/", (req, res) => {
    res.render('home.hbs', {
        pageTitle: "home page",
        welcomeMessage: "Welcome to my site"     
    });
});

app.get("/about", (req, res) => {
    res.render('about.hbs', {
        pageTitle: "about page"               
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
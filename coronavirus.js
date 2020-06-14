const express = require("express");
const api = require('novelcovid');
const exhbs = require("express-handlebars");


// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})

// api.all().then(console.log)
api.countries().then(console.log)

const app = express();
const port = 4000;

app.set("view engine" , "hbs");
app.engine("hbs" , exhbs( {
    extname: "hbs",
    defaultView: "home",
    layoutsDir: __dirname + "/views/layout"
}));


app.get("/countries",(req , res) => {

    api.countries().then((response) => {
        res.render("home.hbs" , {info:response})
    })
})

app.listen(port , () => {
    console.log(`Lo Chali Mai ${port}`);
})
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT ||8000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// public status path
app.use(express.static(staticPath));
app.set("view engiene", 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req,res)=>{
    res.render("index.hbs");
});

app.get("/about", (req,res)=>{
    res.render("about.hbs");
});

app.get("/weather", (req,res)=>{
    res.render("weather.hbs");
});

app.get("*", (req,res)=>{
    res.render("404error.hbs",{
        errorMsg: "oops! page not found"
    });
});

app.listen(port,()=>{
 console.log(`the port number is ${port}`);
});
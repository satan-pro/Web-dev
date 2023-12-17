const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

const articleSchema = new mongoose.Schema({
    title : String,
    content : String
});

const articles = new mongoose.model("article", articleSchema);

/* Fetching all articles from the database*/

app.get("/articles", function(req, res){
    articles.find({}).exec().then(foundList=>{
        res.send(foundList);
    })
});

app.post("/articles", function(req, res){
    let newArticle = new articles({
        title:req.body.title,
        content:req.body.content
    });
    newArticle.save().then(()=>{
        res.redirect("/articles");
    });
});

app.delete("/articles", function(req, res){
    articles.deleteMany().then(()=>{
        console.log("Successfully deleted data");
        res.send("Data deleted");
    })
});

/* Fetching a specific article from the database */

app.route("/articles/:articleName")
/* Using a GET request */
.get(function(req,res){
    articleName = req.params.articleName
    articles.findOne({title:articleName}).exec().then(foundList=>{
        res.send(foundList)
        console.log(foundList);
    });
})
// Using a PUT request
.put(function(req, res){
    articles.updateMany(
        {title : req.params.articleName},
        {title : req.body.title,content: req.body.content},
        {overwrite:true, upsert:true}
    ).exec().then(()=>{
        console.log("Successfully updated article")
    }).catch((err)=>{
        console.log(err)
    });
})
//Using a PATCH request
.patch(function(req,res){
    articles.updateMany(
        {title:req.params.articleName},
        {$set :{title:req.body.title}}
    ).exec().then(()=>{
        console.log("Successfully Patched request");
    }).catch((err)=>{
        console.log(err);
    });
})
//Using a DELETE request
.delete(function(req,res){
    articles.deleteOne({title:req.params.articleName}).exec().then(()=>{
        console.log("Item successfully deleted");
    });
});


app.listen(3000, function(){
    console.log("Server set on port 3000");
});
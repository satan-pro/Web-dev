const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemSchema = new mongoose.Schema({
    name:String
});

const Item = mongoose.model("Item", itemSchema);

let note1 = new Item({name:"Buy Food"});
let note2 = new Item({name:"cook"});
let note3 = new Item({name: "eat"});

let notes = [note1, note2, note3];

Item.insertMany(notes).then(()=>{
    console.log("Successfully added all itmes to DB");
});

let newNotes=["Buy food", "cook", "eat"];
let workNotes=[];
app.get("/", function(req, res){
    var today = new Date();
    let options = {
        weekday:'long',
        day: 'numeric',
        month: 'long'
    };
    let currentDay = today.toLocaleDateString('en-US', options);
    res.render('lists',{listName: currentDay, notes: newNotes, name:"Work"});
}); 

app.post("/", function(req, res){
   let item = req.body.newNote;
   if(req.body.submit==="Work List")
   {
    workNotes.push(item);
    res.redirect("/work");
   }
   else{
    newNotes.push(item);
    res.redirect("/");
   }
  
});

app.get("/work", function(req, res){
    res.render('lists', {listName:"Work List", notes:workNotes , name:"Home"});
});

app.post("/work", function(req, res){
    console.log(req.body);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render('about');
});

app.post("/redirect", function(req, res){
    console.log(req.body.submit);
    if(req.body.submit==="Work")
    {
        res.redirect("/work");
    }
    if(req.body.submit==="Home")
    {
        res.redirect("/");
    }
})

app.listen(3000, function(){
    console.log("Server set on port 3000");
}); 
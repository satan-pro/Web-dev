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

const dailyNote = mongoose.model("dailyNote", itemSchema);

let note1 = new dailyNote({name:"Buy Food"});
let note2 = new dailyNote({name:"cook"});
let note3 = new dailyNote({name: "eat"});

let defaultNotes = [note1, note2, note3];

const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
});

const lists = mongoose.model("list", listSchema);

var today = new Date();
let options = {
    weekday:'long',
    day: 'numeric',
    month: 'long'
};
let currentDay = today.toLocaleDateString('en-US', options);

app.get("/", function(req, res){

    dailyNote.find({}).exec().then(items=>{
        if(items.length===0)
        {
            dailyNote.insertMany(defaultNotes).then(()=>{
                console.log("Successfully added default Notes to DB");
            });
            res.redirect('/');
        }
        else
        {
            res.render('lists',{listName: currentDay, notes: items});
        }
    });
}); 

app.post("/", function(req, res){
   let item = req.body.newNote;
   let listName = req.body.submit;
   let newNote = new dailyNote({name:item});
   console.log(listName);
   if(listName===currentDay)
   {
    newNote.save();
    res.redirect('/');
   }
   else{
    lists.findOne({name:listName}).exec().then(foundList=>{
        let foundListItem = foundList.items;
        foundListItem.push(newNote);
        lists.updateOne({name:listName}, {items:foundListItem}).exec();
        res.redirect("/"+listName);
    });
   }
});

app.get("/:listName", function(req, res){
   const listName = req.params['listName'];
   lists.findOne({name:listName}).exec().then(foundList=>{
    if(!foundList)
    {
        //Create a new list
        const newList = new lists({
            name:listName,
            items:defaultNotes
        });
        newList.save();
        res.redirect("/"+listName);
    }
    else{
        //Show an existing list
        res.render('lists', {listName:foundList.name, notes:foundList.items});
    }
   });
})

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
});

app.post("/delete", function(req, res){
    let noteID = req.body.checkbox;
    dailyNote.deleteOne({_id:noteID}).exec();
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Server set on port 3000");
}); 
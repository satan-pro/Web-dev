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
const workNote = mongoose.model('workNote', itemSchema);

let note1 = new dailyNote({name:"Buy Food"});
let note2 = new dailyNote({name:"cook"});
let note3 = new dailyNote({name: "eat"});

let defaultNotes = [note1, note2, note3];



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
            res.render('lists',{listName: currentDay, notes: items , name:"Work"});
        }
    });
    
}); 

app.post("/", function(req, res){
   let item = req.body.newNote;
   if(req.body.submit==="Work List")
   {
    var newWorkNote = new workNote({name:item});
    newWorkNote.save();
    res.redirect("/work");
   }
   else{
    var newDailyNote = new dailyNote({name:item});
    newDailyNote.save();
    res.redirect("/");
   }
  
});

app.get("/work", function(req, res){
    workNote.find({}).then(notes=>{
        res.render('lists', {listName:"Work List", notes:notes , name:"Home"});
    })
    
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
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
/* const md5 = require('md5');
const bcrypt = require('bcrypt');
const saltRounds = 10; */
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
//const flash = require('express-flash');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");

app.use(session({
    secret : "auth proj",
    resave : false,
    saveUninitialized : false,
    cookie:{secure:false}
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/secretsDB');
//mongoose.set("useCreateIndex", true); 

const userSchema = new mongoose.Schema({
    name:String,
    password:String 
});

userSchema.plugin(passportLocalMongoose);

const user = new mongoose.model("user",userSchema);

passport.use(user.createStrategy());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.get("/",function(req,res){
    res.render('home');
});

app.get("/register", function(req,res){
    res.render("register");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.get("/secrets",function(req, res){
   if(req.isAuthenticated())
   {
    res.render("secrets");
   }
   else{
    res.redirect("/login");
   }
});

app.get("/401", function(req,res){
    res.render("401");
});

app.get("/logout", function(req, res){
    req.logout(function(err){
       if(err){
        console.log(err);
       }
       res.redirect("/");
    });
});

app.post("/register", function(req,res){
    /* bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        username = req.body.username;
        pwd = hash;
        const newUser = new user({name:username, password:pwd});
        newUser.save();
        res.redirect("/login");
    });
}); */

    user.register({username:req.body.username},req.body.password, function(err, userReg){
        if(err)
        {
            console.log(err);
            res.redirect('/register');
        }
        else{
           passport.authenticate("local")(req, res, function(){
            res.redirect("/secrets");
           });
        }  
        });
    });

/* app.post("/login", function(req,res){
    username = req.body.username;
    pwd = req.body.password;
    user.findOne({name:username}).exec().then((foundList)=>{
        if(foundList)
        {
            bcrypt.compare(pwd, foundList['password'], function(err, result){
                if(result==true)
                {
                    res.redirect("/secrets");
                }
                else
                {
                    res.redirect("/401");
                }
            });
        }
    });
}); */

app.post("/login", function(req, res){
    const User = new user({
        name : req.body.username,
        password : req.body.password
    });

    req.login(User, function(err) {
        if (err) 
        { 
            console.log(err);
        }
        else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            })
        }
      });
})

app.listen(3000, function(req,res){
    console.log("Server set on port 3000");
});


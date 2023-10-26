const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const email = req.body.email;
    const data ={

        members : [
            {
                email_address : email,
                status : "subscribed",
                merge_fields : {
                    FNAME : fName,
                    LNAME : lName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/a50bfb0633";
    const options = {
        method : "POST",
        auth : 'username1:1552e1d1aab7e8c2e011a3c203ac8521-us21'
    };
    const request = https.request(url,options,function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
        if(response.statusCode===200)
        {
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
    });

    request.write(jsonData);
   /*  request.on("statusCode", function(stat){
        console.log(stat);
    }); */
    //console.log(request.statusCode);
    request.end();
});

app.post("/failure",function(req,res){
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server set on port 3000");
});


//API Key
//1552e1d1aab7e8c2e011a3c203ac8521-us21
//Audience ID : a50bfb0633
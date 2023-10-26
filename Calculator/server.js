const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function(req,res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = parseInt(weight/Math.pow((height/100),2));

    res.send(`<h2>Your BMI is ${bmi}</h2>`)
})
app.listen(3000, function(){
    console.log("server set on port 3000");
});


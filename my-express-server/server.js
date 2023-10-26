const express = require("express")
const app = express();

app.get("/", function(request, response){
    response.send("<h1>hello<h1>");

});

app.get("/contact", function(req, res){
    res.send("Conact me at staan");
})

app.get("/about", function (req, response) {
    response.send("I am sayantan sett")
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Code</li><li>Paint</li><li>game</li></ul>")
})

app.listen(3000, function(){
    console.log("server set on port 3000");
});
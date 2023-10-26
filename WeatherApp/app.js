const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.city;
  https.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=472352bc807e31209e2536ebfb363c3e&units=metric`,
    function (call) {
      console.log(call.statusCode);
      call.on("data", function (data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const iconUrl =
          " https://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write(
          `<h1>The temperature is : ${temp}</h1><h1>The description of the weather is : ${weatherDescription}</h1>`
        );
        res.write(`<img src = "${iconUrl}">`);
        res.write("<button><a href='/'>Go Back</a></button>");
        res.send();
      });
    }
  );
});

app.listen(3000, function () {
  console.log("Server set on port 3000");
});

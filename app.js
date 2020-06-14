// var http = require("http");

// const port = 80;

// var url = "https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02";

// var server = http.createServer(function(request , response){

//     var request = require("request");
//     request(url , function(err , res , body){
//         var data = JSON.parse(body);
//         response.write("<html><body><div id='container'>");
//         response.write("<h1>"+ 'Temperture - : ' + data.main['temp']+ '<br>'+"</h1>");
//         response.write("<h1>"+ 'Sunrise - : ' + new Date(data.sys['sunrise']+1000)+ '<br>'+"</h1>");
//         response.write("</div></body></html>")
//     });

// }).listen(port , () => {
//     console.log(`Y chla Server ${port} pe`)
// });



// {
// "coord":{"lon":139.01,"lat":35.02},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
// "base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,
// "temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},
// "wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP",
// "sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}
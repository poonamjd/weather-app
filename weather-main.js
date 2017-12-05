var weather = require('./weather-details.js');
var location = require('./location.js');

weather(function (currentWeather){
    console.log(currentWeather);
});

location(function (location){
    if(!location) {
        console.log('Unable to fetch the location');
        return;
    }

    console.log('log/lat: '+ location.loc);
})
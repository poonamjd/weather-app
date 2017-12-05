var request = require('request');
var location = require('./location.js');

module.exports = function (location, callback) {
    return new Promise(function(resolve,reject){
        var encodedLocation = encodeURIComponent(location);
        console.log(encodedLocation);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=f2cbf89d5fb555248df97477fe6ca160&units=metric';
        
        if(!location){
            return reject('No location provided');
        }
        request({
            url: url,
            json: true,
        }, function (error, response, body){
            if(error) {
                reject('Unable to fetch weather at your location.');
            } else {
                reject('It\'s '+ body.main.temp + ' degrees and the humidity is '+ body.main.humidity +' in ' + body.name + '!');
            }
        });
    });
}
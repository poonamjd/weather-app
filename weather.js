var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Pune,in&appid=f2cbf89d5fb555248df97477fe6ca160&units=metric';

module.exports = function (callback) {
    request({
        url: url,
        json: true,
    }, function (error, response, body){
        if(error) {
            callback('Unable to fetch weather at your location.');
        } else {
            callback('It\'s '+ body.main.temp + ' degrees in ' + body.name + '!');
        }
    });
}
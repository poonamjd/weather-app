var request = require('request');
var url = 'https://ipinfo.io';

return new Promise(function(resolve,reject){
    module.exports = function (callback) {
        request({
            url: url,
            json: true
        }, function (error, response, body){
            if(error){
                callback();
            } else {
                body = {city:'Pune'};
                callback(body);
            }
        });
    }
});
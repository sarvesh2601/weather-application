// const geocode = require('./geocode.js');
const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    url =  'http://api.weatherstack.com/current?access_key=baa0349868d09e1fc3d94ed0c9d159e8&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Please connect to the network', undefined)
        }else if(response.body.error){
            callback(response.body.error.info)
        }else{
            callback(undefined, {
                temp: response.body.current.temperature,
                windSpeed: response.body.current.wind_speed,
                feelLike: response.body.current.feelslike,
                chanceOfRain: response.body.current.precip
            })
        }
    })
}

module.exports = forecast;

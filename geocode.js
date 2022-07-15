const request = require('request');

const geocode = (address, callback) =>{
    url = 'http://api.positionstack.com/v1/forward?access_key=c0dfa62a2eb14f3453992d009ad7ec83&query=' + encodeURIComponent(address);
    request({url: url, json:true}, (error, response)=>{
        if(error){
            callback('Not connected to network', undefined)
        }else if(response.body.error){
            callback(response.body.error.message, undefined);
        }else{
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            })
        }
    })

}
module.exports = geocode;
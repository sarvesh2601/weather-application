const geocode = require('geocode.js')
const forecast = require('forecast.js')
if(process.argv[2] === undefined){
    console.log('Please enter an address')
}else{
    geocode(process.argv[2], (error, response)=>{
        if(error){
            return console.log(error)
        }
        const {latitude, longitude, location} = response
        forecast(latitude, longitude, (error, forecastResponse)=>{
            if(error){
                return console.log(error);
            }
            const location = response.location
            console.log(location);
            console.log(forecastResponse);
            
         })
        })
        console.log(process.argv)
        
}





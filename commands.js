const fs = require('fs');

// const carArray = require ('./carArray')

var cars = 
[
    {
        make : 'MCLAREN',
        model : 'Speedtail',
        purpose : 'Grand Touring',
        powertrain : 
            {
                displacement : '4l Twin-Turbo V8',
                power : '1000hp',
                type : 'Hybrid',
                performance : {
                                    acceleration_60_MPH : '2.5 sec',
                                    speed : 250   
                              }
            },  
        
    },
    {
        make : 'ASTON MARTIN',
        model : 'Vulcan',
        purpose : 'Track',
        powertrain :    
            {
                displacement : '7.5l NA V12',
                power : '800hp',
                type : 'Combustion',
                performance : {
                                    acceleration_60_MPH : '2.8 sec',
                                    speed : 225   
                              }
            },
        
    },
    {
        make : 'MCLAREN',
        model : 'P1 GTR',
        purpose : 'Track',
        powertrain : 
            {
                displacement : '4l TwinTurbo v8',
                power : '1050hp',
                type : 'Hybrid',
                performance : {
                                    acceleration_60_MPH : '2.5 sec',
                                    speed : 217   
                              }
            },

    },
    {
        make : 'FERRARI',
        model : 'Portofino',
        purpose : 'Grand Touring',
        powertrain : 
            {
                displacement : '3.9l TwinTurbo V8',
                power : '591hp',
                type : 'Combustion',
                performance : {
                                    acceleration_60_MPH : '3.5 sec',
                                    speed : 199   
                              }
            },
        
    },
    {
        make : 'BUGATTI',
        model : 'Veyron',
        purpose : 'Grand Touring',
        powertrain : 
            {
                displacement : '8l QuadTurbo W16',
                power : '1000hp',
                type : 'Combustion',
                performance : {
                                    acceleration_60_MPH : '2.5 sec',
                                    speed : 261   
                              } 
            },                    
    },

    {
        make : 'PINNINFARINA',
        model : 'BATTISTA',
        purpose : 'Grand Touring',
        powertrain : 
            {
                motor : '4 liquid-cooled synchronous magnetic motors',
                power : '1900hp',
                type : 'Electric',
                performance : {
                                    acceleration_60_MPH : '1.9 sec',
                                    speed : 217   
                              } 
            },
    }                                   
]
    
// const carArr = cars.forEach((value, index, array) => console.log('value : ', value, 'index : ', index, 'array : ', array));     








const dispAll = (make, model) =>
{   
    if( carsArray.make === make && carsArray.model === model )
    {
        const carsArray = cars.forEach( (value) => console.log( 'value : ', value ));
    }
}   

// const loadCarsArr = () => 
// {
//     try
//     {
//         const dataBuffer = fs.readFileSync('cars.json');

//         const dataJSON = dataBuffer.toString();
     
//         return JSON.parse(data);
//     }
//     catch(e)
//     {
//         return [];
//     }
// }

// console.log(loadArray);

module.exports =
{
    allCars,

    loadCarsArr
}









     































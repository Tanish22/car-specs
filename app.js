const utils = require('utils');

const yargs = require('yargs');

const fs = require('fs');

const commands = require('./commands');

// const carArray = require('./carArray');

yargs.command
(
    {
        command : 'allCars',

        describe : 'Displays all cars and their specifications', 

        builder :  
        {
            make : 
            {
                description : 'Make(Manufacturer) of the Car',

                demandOption : true,

                type : 'string'
            },

            model :                                 
            {
                description : 'A specific model of that brand',

                demandOption : true,            
                 
                type : 'string'
            }
        },

        handler : function(argv)
        {
            commands.dispAll(argv.make, argv.title)           
        }
    }   
)

// yargs.parse();
// yargs.command
// (
//     {
//         command : 'carType',

//         describe : 'Displays cars based on their powertrains !!', 

//         builder : 
//         {
//             make : 
//             {
//                 description : 'Make(Manufacturer) of the Car',

//                 demandOption : true,

//                 type : 'string'
//             },

//             model :                                 
//             {
//                 description : 'A specific model of that brand',

//                 demandOption : true,            
                 
//                 type : 'string'
//             }
//         },

//         handler : function()
//         {
//             commands.carArray();
//         }   
//     }
// )

// yargs.command
// (
//     {
//         command : 'bestPerf',

//         describe : 'Displays fastest cars based on acceleration and topspeed', 

//         builder : 
//         {
//             make : 
//             {
//                 description : 'Make(Manufacturer) of the Car',

//                 demandOption : true,

//                 type : 'string'
//             },

//             model :                                 
//             {
//                 description : 'A specific model of that brand',

//                 demandOption : true,            
                 
//                 type : 'string'
//             }   
//         },

//         handler : function(argv)
//         {   
//             carArray.carsExec
//         }
//     }
// )

// yargs.parse()





























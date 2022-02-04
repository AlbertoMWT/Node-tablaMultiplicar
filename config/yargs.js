const argv = require("yargs")
                .option('b', {
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })      
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muesta la tabla en consola'
                } )
                .option( 'h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Indica hasta que número multiplicar'
                } )
                .check( (argv, option) => {
                    if(isNaN (argv.b) ){
                        throw 'La base debe ser un numero'
                    }
                    return true;
                } )
                .argv;



module.exports = argv;
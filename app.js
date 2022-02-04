const { argv } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();


// const [ , , arg3 = 'base=1' ] = process.argv;
// const [, base = 5 ] = arg3.split('='); // MANERA ANTERIOR

// console.log( argv )
// console.log( 'base: yargs', argv.base )


// const base = 3;

crearArchivo( argv.b, argv.l, argv.h )
    .then(msg => console.log( msg ))
    .catch( err => console.log(err))

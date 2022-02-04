const fs = require('fs');
let colors = require('colors')

const crearArchivo = async( base = 1, listar = false, hasta = 10 ) => {

    
    try{
        
        let salida = '';
    
        for( let i=1 ; i<=hasta ; i++  ){
            salida += ( `${base} * ${i} = ${base * i} \n` )
        }

        if ( listar ){
            console.log( '==========================='.grey)
            console.log( `tabla del:`.underline, colors.red(base))
            console.log( '==========================='.grey)
            console.log()

            
            console.log(salida)
        }
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `La tabla del ${ base } ha sido creada`
        
    } catch ( err ){
        throw error;
    }
}

module.exports = {
    crearArchivo
}
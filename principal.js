const {cursos} = require ('./evaluacion');
const fs = require ('fs');

const inscribir = {
    
    id:{
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
  
}

const argv = require('yargs')
            .command('inscribir', 'Inscribirme en un curso', inscribir)
            .argv
//console.log(argv);

let {id, nombre, cedula} = inscribir;
let cursoSeleccionado = cursos.find(ofertaEst => ofertaEst.id == argv.id)


let crearArchivo = (cursos) => {
    texto = 'El estudiante ' + argv.nombre + '\n' +
            'con cedula ' + argv.cedula +'\n'+
            'Se ha matriulado en el curso llamado '+ cursoSeleccionado.curso + ' tiene una duración de ' +
                                                    cursoSeleccionado.duracion + ' y un valor de ' + cursoSeleccionado.valor
           
   fs.writeFile('inscripcion.txt', texto, (err) => {
          if (err) throw (err);
          console.log('se ha creado el archivo');
   });
}
if(argv._ =='inscribir'){
    if(cursoSeleccionado != null){
        crearArchivo(cursos);
    }else{
        console.log('El curso no existe');
		   let ofertaEstudiante1 = cursos.find(ofertaEst => ofertaEst.id == id1)
 setTimeout(function(){
    console.log('El curso con id '+ ofertaEstudiante1.id+' se llama ' + ofertaEstudiante1.curso+' tiene una duración '+
    ofertaEstudiante1.duracion+' y un valor de '+ ofertaEstudiante1.valor+' pesos');
});

let ofertaEstudiante2 = cursos.find(ofertaEst2 => ofertaEst2.id == id2)
setTimeout(function(){
    console.log('El curso con id '+ ofertaEstudiante2.id+' se llama ' + ofertaEstudiante2.curso+' tiene una duración '+
    ofertaEstudiante2.duracion+' y un valor de '+ ofertaEstudiante2.valor +' pesos');
});

let ofertaEstudiante3 = cursos.find(ofertaEst3 => ofertaEst3.id == id3)
setTimeout(function(){
    console.log('El curso con id '+ ofertaEstudiante3.id+' se llama ' + ofertaEstudiante3.curso+' tiene una duración '+
    ofertaEstudiante3.duracion+' y un valor de '+ ofertaEstudiante3.valor +' pesos');
});
    }
}else{
    let ofertaEstudiante1 = cursos.find(ofertaEst => ofertaEst.id == id1)
 setTimeout(function(){
    console.log('El curso con id '+ ofertaEstudiante1.id+' se llama ' + ofertaEstudiante1.curso+' tiene una duración '+
    ofertaEstudiante1.duracion+' y un valor de '+ ofertaEstudiante1.valor+' pesos');
}, 2000);

let ofertaEstudiante2 = cursos.find(ofertaEst2 => ofertaEst2.id == id2)
setTimeout(function(){
    console.log('El curso con id '+ ofertaEstudiante2.id+' se llama ' + ofertaEstudiante2.curso+' tiene una duración '+
    ofertaEstudiante2.duracion+' y un valor de '+ ofertaEstudiante2.valor +' pesos');
}, 4000);

let ofertaEstudiante3 = cursos.find(ofertaEst3 => ofertaEst3.id == id3)
setTimeout(function(){
    console.log('El curso con id '+ ofertaEstudiante3.id+' se llama ' + ofertaEstudiante3.curso+' tiene una duración '+
    ofertaEstudiante3.duracion+' y un valor de '+ ofertaEstudiante3.valor +' pesos');
}, 6000);
}


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Bandera para completar la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('listar', 'Muestra las tareas por hacer')
    .command('borrar', 'Borra una tarea por hacer dada su descripción', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}
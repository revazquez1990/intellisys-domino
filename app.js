const { Juego } = require('./class/Juego');
const { Jugador } = require('./class/Jugador');

process.stdout.write('Favor ingrese los nombres de los jugadores separados por coma: \n');
process.stdin.on('data', function(data){
    const listaNombres = data.toString().trim().split(',');
    const juego = new Juego(listaNombres);
    let codigo = 1;
    let jugadores = listaNombres.reduce((valorActual) => {
        new Jugador(valorActual,codigo);
        codigo++;
    })
    console.log(jugadores);
    // for (let i = 0; i < listaNombres.length; i++) {
    //     new Jugador(listaNombres[i], i);
    // }
    console.log(juego);
    // console.log(jugadores);
    
})
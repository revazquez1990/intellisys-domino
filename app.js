const { Juego } = require('./class/Juego');
const { Jugador } = require('./class/Jugador');
const { Ronda } = require('./class/Ronda');

let listaNombres;
process.stdout.write('Favor ingrese los nombres de los jugadores separados por coma: \n');
process.stdin.on('data', function(data){
    listaNombres = data.toString().trim().split(',');
    let codigo = 1;
    const jugadores = listaNombres.reduce((arrJugadores,valorActual) => {
        const jugador = new Jugador(valorActual,codigo);
        arrJugadores.push(jugador);
        codigo++;
        return arrJugadores;
    },[])
    const juego = new Juego(jugadores);
    desplegarMenu();
});

function desplegarMenu() {
    process.stdout.write('Marque la opcion deseada \n');
    process.stdout.write('Opcion 1: Jugar \n');
    process.stdout.write('Opcion 2: Salir \n');
    
     process.stdin.once('readable', function(data){
        if (data === 1) {
            Ronda.asignarFichasAJugadores();
        }
    });

    const ronda1 = new Ronda(1, listaNombres);
    console.log(ronda1);
}


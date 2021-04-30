const { Juego } = require('./class/Juego');
const { Jugador } = require('./class/Jugador');

let listaNombres, numData = 1, estado = 1;
    process.stdout.write('Favor ingrese los nombres de los jugadores separados por coma: \n');
    process.stdin.on('data', function(data){
    if (estado === 1) {
        listaNombres = data.toString().trim().split(',');
        let codigo = 1;
        const jugadores = listaNombres.reduce((arrJugadores,valorActual) => {
            const jugador = new Jugador(valorActual,codigo);
            arrJugadores.push(jugador);
            codigo++;
            return arrJugadores;
        },[])
        estado ++;
        const juego = new Juego(emparejar(jugadores));
        desplegarMenu(juego);
    }
});

function desplegarMenu(juego) {
    process.stdout.write('Marque la opcion deseada \n');
    process.stdout.write('Opcion 1: Jugar \n');
    process.stdout.write('Opcion 2: Salir \n');
    
    process.stdin.on('data', function(data){
        if (estado === 2 && data.toString().trim() === '1') {
            juego.jugar();
        }else process.exit();
    });
}

const emparejar = (jugadores) => {
    jugadores[0].codigoPareja = 1;
    jugadores[1].codigoPareja = 2;
    jugadores[2].codigoPareja = 1;
    jugadores[3].codigoPareja = 2;

    return jugadores;
}
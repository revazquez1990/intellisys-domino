const Ficha = require('./Ficha');

class Jugador {
 
    constructor(name, code) {
        this.code = code;
        this.name = name;
        // this.fichaJugador = new Ficha();
        // this.codigoPareja = codigoPareja;
    }
    
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

module.exports = {
    Jugador
};
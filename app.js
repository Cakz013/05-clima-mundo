
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require ("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// argv.direccion
// lugar.getLugarLatLng(argv.direccion).then((result) => {
//     console.log(result);
// }).catch((err) => {
    
// });;
// clima.getClima(40.750000,-74.000000).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });;

const getInfo = (direccion) => {
    lugar.getLugarLatLng(direccion).then((result) => {
            const lat = result.lat;
            const lon = result.lng;
            clima.getClima(lat,lon).then((result) => {
                    console.log(`El clima de ${ direccion } es de ${result}`);
                }).catch((err) => {
                    console.log(err);
                });
        }).catch((err) => {
            console.log(err);
        });;
}

getInfo ( argv.direccion );
    
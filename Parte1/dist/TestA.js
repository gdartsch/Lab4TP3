"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestA = void 0;
const Vehiculo_1 = require("./modelo/modeloA/Vehiculo");
const Detalle_1 = require("./modelo/modeloA/Detalle");
const HojaRuta_1 = require("./modelo/modeloA/HojaRuta");
class TestA {
    static main() {
        let vehiculo = new Vehiculo_1.Vehiculo();
        let hojaRuta1 = new HojaRuta_1.HojaRuta();
        let hojaRuta2 = new HojaRuta_1.HojaRuta();
        let hojaRuta3 = new HojaRuta_1.HojaRuta();
        let detalle1 = new Detalle_1.Detalle();
        let detalle2 = new Detalle_1.Detalle();
        let detalle3 = new Detalle_1.Detalle();
        let detalle4 = new Detalle_1.Detalle();
        let detalle5 = new Detalle_1.Detalle();
        let detalle6 = new Detalle_1.Detalle();
        let detalle7 = new Detalle_1.Detalle();
        let detalle8 = new Detalle_1.Detalle();
        let detalle9 = new Detalle_1.Detalle();
        detalle1.setKmSalida(100);
        detalle1.setKmRegreso(200);
        detalle1.setHoraSalida(10);
        detalle1.setHoraRegreso(20);
        detalle1.setMinutoSalida(10);
        detalle1.setMinutoRegreso(20);
        detalle1.setHojaRuta(hojaRuta1);
        detalle2.setKmSalida(100);
        detalle2.setKmRegreso(200);
        detalle2.setHoraSalida(10);
        detalle2.setHoraRegreso(20);
        detalle2.setMinutoSalida(10);
        detalle2.setMinutoRegreso(20);
        detalle2.setHojaRuta(hojaRuta1);
        detalle3.setKmSalida(100);
        detalle3.setKmRegreso(200);
        detalle3.setHoraSalida(10);
        detalle3.setHoraRegreso(20);
        detalle3.setMinutoSalida(10);
        detalle3.setMinutoRegreso(20);
        detalle3.setHojaRuta(hojaRuta1);
        detalle4.setKmSalida(100);
        detalle4.setKmRegreso(200);
        detalle4.setHoraSalida(10);
        detalle4.setHoraRegreso(20);
        detalle4.setMinutoSalida(10);
        detalle4.setMinutoRegreso(20);
        detalle4.setHojaRuta(hojaRuta2);
        detalle5.setKmSalida(100);
        detalle5.setKmRegreso(200);
        detalle5.setHoraSalida(10);
        detalle5.setHoraRegreso(20);
        detalle5.setMinutoSalida(10);
        detalle5.setMinutoRegreso(20);
        detalle5.setHojaRuta(hojaRuta2);
        detalle6.setKmSalida(100);
        detalle6.setKmRegreso(200);
        detalle6.setHoraSalida(10);
        detalle6.setHoraRegreso(20);
        detalle6.setMinutoSalida(10);
        detalle6.setMinutoRegreso(20);
        detalle6.setHojaRuta(hojaRuta2);
        detalle7.setKmSalida(100);
        detalle7.setKmRegreso(200);
        detalle7.setHoraSalida(10);
        detalle7.setHoraRegreso(20);
        detalle7.setMinutoSalida(10);
        detalle7.setMinutoRegreso(20);
        detalle7.setHojaRuta(hojaRuta3);
        detalle8.setKmSalida(100);
        detalle8.setKmRegreso(200);
        detalle8.setHoraSalida(10);
        detalle8.setHoraRegreso(20);
        detalle8.setMinutoSalida(10);
        detalle8.setMinutoRegreso(20);
        detalle8.setHojaRuta(hojaRuta3);
        detalle9.setKmSalida(100);
        detalle9.setKmRegreso(200);
        detalle9.setHoraSalida(10);
        detalle9.setHoraRegreso(20);
        detalle9.setMinutoSalida(10);
        detalle9.setMinutoRegreso(20);
        detalle9.setHojaRuta(hojaRuta3);
        hojaRuta1.setDetalles([detalle1, detalle2, detalle3]);
        hojaRuta1.setFecha(new Date(2019, 1, 1));
        hojaRuta1.setVehiculo(vehiculo);
        hojaRuta1.setNumero(1);
        hojaRuta2.setDetalles([detalle4, detalle5, detalle6]);
        hojaRuta2.setFecha(new Date(2019, 1, 1));
        hojaRuta2.setVehiculo(vehiculo);
        hojaRuta2.setNumero(2);
        hojaRuta3.setDetalles([detalle7, detalle8, detalle9]);
        hojaRuta3.setFecha(new Date(2019, 1, 1));
        hojaRuta3.setVehiculo(vehiculo);
        hojaRuta3.setNumero(3);
        vehiculo.setPatente("ABC123");
        vehiculo.setMarca("Chevrolet");
        vehiculo.setModelo("Spark");
        vehiculo.setHojasRuta([hojaRuta1, hojaRuta2, hojaRuta3]);
        console.log('Kms recorridos de la primera hoja de ruta: ' +
            vehiculo.getHojasRuta()[0].calcularTotalKilometros());
        console.log('Kms recorridos de la primera hoja de ruta: ' +
            vehiculo.calcularTotalKilometrosRecorridos(new Date(2019, 1, 1), new Date(2022, 1, 2)));
    }
}
exports.TestA = TestA;

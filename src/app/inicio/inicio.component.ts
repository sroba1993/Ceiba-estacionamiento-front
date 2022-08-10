import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { VehiculosDTO } from '../models/VehiculosDTO';
import { VehiculoIngreso } from '../models/VehiculoIngreso';
import { NgForm } from '@angular/forms';
import { Vehiculo } from '../models/Vehiculo';

@Component({
  selector: 'inicio-root',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  habilitarCilindraje: boolean = false;

  ingresoVehiculo : VehiculoIngreso = {
    placa: '',
    tipoVehiculo: '',
    cilindraje: null,
  };

  vehiculo: Vehiculo = {
    placa: '',
    tipoVehiculo: '',
    cilindraje: 0,
    fechaEntrada: null,
    fechaSalida: null,
    totalPagar: 0,
  }

  vehiculoDTO: VehiculosDTO = {
    placa: "",
    tipoVehiculo: "",
    fechaEntrada: "",
  }

  constructor(private restService: RestService){}

  clickIngresarVehiculo(formIngreso: NgForm):void {
    if(formIngreso.valid == true){
      this.restService.ingresarVehiculo(this.ingresoVehiculo).subscribe(
        vehiculoDTO => this.vehiculoDTO = vehiculoDTO,
        error => alert(error.error)
      );
    }
  }

  clickRegistrarSalida(formSalida: NgForm):void {
    if(formSalida.valid == true){
      this.restService.registrarSalida(this.vehiculo.placa).subscribe(
        vehiculo => this.vehiculo = vehiculo,
        error => alert(error.error)
      );
    }
  }
}

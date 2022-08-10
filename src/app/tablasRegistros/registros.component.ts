import { Component, OnInit } from '@angular/core';
import { VehiculosDTO } from '../models/VehiculosDTO';
import { RestService } from '../rest.service';

@Component({
  selector: 'registros-root',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  title = 'Ceiba-estacionamiento';
  vehiculosDTO: VehiculosDTO[];

  constructor(private restService: RestService){}

  ngOnInit(): void {
    this.restService.traerLista().subscribe(
      vehiculosDTO => this.vehiculosDTO = vehiculosDTO
    )
  }
}


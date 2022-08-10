import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { VehiculosDTO } from './models/VehiculosDTO';
import { VehiculoIngreso } from './models/VehiculoIngreso';
import { Vehiculo } from './models/Vehiculo';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private resourceUrl = 'http://localhost:8080/estacionamiento-ceiba';
  
  constructor(private http: HttpClient) { }

  traerLista(): Observable<VehiculosDTO[]> {
    return this.http.get<VehiculosDTO[]>(this.resourceUrl);
  }

  ingresarVehiculo(vehiculoIngreso: VehiculoIngreso) {
    console.log(vehiculoIngreso);
    return this.http.post<VehiculosDTO>(this.resourceUrl, vehiculoIngreso);
  }

  registrarSalida(placa: String) {
    console.log(placa);
    return this.http.put<Vehiculo>(`${this.resourceUrl}/${placa}`, { observe: 'response' });
  } 

  // buscarPlaca(placa: string): Observable<EntityResponseType> {
  //   return this.http.get<IEstacionamiento>(`${this.resourceUrl}/${placa}`, { observe: 'response' });
  // }

}

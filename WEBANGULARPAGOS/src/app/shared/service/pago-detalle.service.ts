import { Injectable } from '@angular/core';
import { PagoDetalle } from '../model/pago-detalle.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagoDetalleService {
  formData: PagoDetalle;
  //Se especifica la url de la WEBAPI de detalle de pagos para poder consumir sus metodos o acciones
  readonly rootURL = 'https://localhost:44389/api';
  list: PagoDetalle[];
  constructor(private http:HttpClient) { }
  //Se ocupa para insertar el detalle del pago
  PostPagosDetalle() {
    return this.http.post(this.rootURL + '/PagoDetalle', this.formData);
  }
  //Se ocupa para actualizar el detalle del pago
  PutPagosDetalle() {
    return this.http.put(this.rootURL + '/PagoDetalle/' + this.formData.Id, this.formData);
  }
  //Se ocupa para eliminar el detalle del pago
  DeletePagosDetalle(id) {
    return this.http.delete(this.rootURL + '/PagoDetalle/'+ id);
  }
  //Se ocupa para obtener la lista de destalles de pagos
  GetPagosDetalles() {
    this.http.get(this.rootURL + '/PagoDetalle')
      .toPromise()
      .then(res => this.list = res as PagoDetalle[]);
  }
}

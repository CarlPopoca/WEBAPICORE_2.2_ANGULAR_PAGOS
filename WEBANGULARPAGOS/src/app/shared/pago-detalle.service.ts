import { Injectable } from '@angular/core';
import { PagoDetalle } from './pago-detalle.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagoDetalleService {
  formData: PagoDetalle;
  readonly rootURL = 'https://localhost:44389/api';
  list: PagoDetalle[];
  constructor(private http:HttpClient) { }

  PostPagosDetalle(formData: PagoDetalle) {
    return this.http.post(this.rootURL + '/PagoDetalle', formData);
  }

  GetPagosDetalles() {
    this.http.get(this.rootURL + '/PagoDetalle')
      .toPromise()
      .then(res => this.list = res as PagoDetalle[]);

  }
}

import { Injectable } from '@angular/core';
import { Ingresar } from '../model/ingresar.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngresarService {
  formData: Ingresar;
  readonly rootURL = "https://localhost:44321/api/Usuarios";

  constructor(private http: HttpClient) { }

  PostIngresar() {
    return this.http.post(this.rootURL + '/Ingresar', this.formData);
  }
}

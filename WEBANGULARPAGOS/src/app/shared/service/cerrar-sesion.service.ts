import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CerrarSesionService {
  readonly rootURL = "https://localhost:44321/api/Usuarios";

  constructor(private http: HttpClient) { }

  PostCerrarSesion() {
    return this.http.post(this.rootURL + '/CerrarSesion',null);
  }
}

import { Injectable } from '@angular/core';
import { RegistrarUsuario } from '../model/registrar-usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {
  formData: RegistrarUsuario;
  readonly rootURL = "https://localhost:44321/api/Usuarios";

  constructor(private http: HttpClient) { }

  PostRegistrarUsuario() {
    return this.http.post(this.rootURL + '/Registrar', this.formData);
  }
}

import { Injectable } from '@angular/core';
import { RegistrarUsuario } from '../model/registrar-usuario.model';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService implements CanActivate {
  formData: RegistrarUsuario;
  readonly rootURL = "https://localhost:44321/api/Usuarios";

  constructor(private http: HttpClient, private router: Router) { }

  PostRegistrarUsuario() {
    return this.http.post(this.rootURL + '/Registrar', this.formData);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var token = localStorage.getItem("token");

    if (token == null) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

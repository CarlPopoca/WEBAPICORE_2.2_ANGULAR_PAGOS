import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CerrarSesionComponent } from '../../seguridad/cerrar-sesion/cerrar-sesion.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CerrarSesionService implements CanActivate {
  readonly rootURL = "https://localhost:44321/api/Usuarios";

  constructor(private http: HttpClient, private router: Router) { }

  PostCerrarSesion() {
    return this.http.post(this.rootURL + '/CerrarSesion',null);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var token = localStorage.getItem("token");

    if (token == null) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

  /*canDeactivate(target: CerrarSesionComponent) {
    var token = localStorage.getItem("token");

    if (token == null)
      return false;
    else
      return true;
  }*/
}


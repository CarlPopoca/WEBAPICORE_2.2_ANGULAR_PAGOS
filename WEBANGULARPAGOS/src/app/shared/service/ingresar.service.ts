import { Injectable } from '@angular/core';
import { Ingresar } from '../model/ingresar.model';
import { HttpClient } from '@angular/common/http';
import { IngresarComponent } from '../../seguridad/ingresar/ingresar.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { NavMenuService } from './nav-menu.service';

@Injectable({
  providedIn: 'root'
})
export class IngresarService implements CanActivate{
  formData: Ingresar;
  readonly rootURL = "https://localhost:44321/api/Usuarios";

  constructor(private http: HttpClient, private router: Router, public nav: NavMenuService) { }

  PostIngresar() {
    return this.http.post(this.rootURL + '/Ingresar', this.formData);
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

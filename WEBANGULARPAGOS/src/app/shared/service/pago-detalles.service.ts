import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagoDetallesService implements CanActivate {
  constructor(private router: Router) {
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
}

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { NavMenuService } from './nav-menu.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavCanactivateService implements CanActivate{
  constructor(public nav: NavMenuService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var token = localStorage.getItem("token");
    if (token == null) {
      this.nav.showCloseSesion(false);
      this.nav.showOptionUser(true);
    }
    else {
      this.nav.showCloseSesion(true);
      this.nav.showOptionUser(false);
    }

    return true;
  }
}

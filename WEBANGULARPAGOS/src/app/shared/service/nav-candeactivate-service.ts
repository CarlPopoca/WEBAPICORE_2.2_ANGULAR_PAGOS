import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { NavMenuService } from './nav-menu.service';
import { HomeComponent } from '../../home/home.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavCandeactiveService implements CanActivate, CanDeactivate<HomeComponent>{
  constructor(public nav: NavMenuService) { }

  canDeactivate(target: HomeComponent) {
    var token = localStorage.getItem("token");

    if (token == null) {
      this.nav.hideCloseSesion(true);
      this.nav.hideOptionUser(false);
    }
    else {
      this.nav.hideCloseSesion(false);
      this.nav.hideOptionUser(true);
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var token = localStorage.getItem("token");
    if (token == null) {
      this.nav.hideCloseSesion(true);
      this.nav.hideOptionUser(false);
    }
    else {
      this.nav.hideCloseSesion(false);
      this.nav.hideOptionUser(true);
    }

    return true;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-pago-detalles',
  templateUrl: './pago-detalles.component.html',
  styleUrls: []
})
export class PagoDetallesComponent implements CanActivate  {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  canActivate(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('token'));
    alert(currentUser);
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/ingresar']);
      return false;
    }
  }

}

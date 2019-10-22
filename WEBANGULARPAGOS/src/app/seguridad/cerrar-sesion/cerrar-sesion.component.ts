import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html'
})
export class CerrarSesionComponent implements OnInit {
  token = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");

    if (this.token != null) {
      localStorage.removeItem("token");
      this.router.navigate(['/']);
    }
  }

}

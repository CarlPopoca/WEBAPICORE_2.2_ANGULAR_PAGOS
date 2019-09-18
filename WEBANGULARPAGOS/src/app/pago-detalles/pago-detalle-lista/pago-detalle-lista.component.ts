import { Component, OnInit } from '@angular/core';
import { PagoDetalleService } from '../../shared/pago-detalle.service';

@Component({
  selector: 'app-pago-detalle-lista',
  templateUrl: './pago-detalle-lista.component.html',
  styleUrls: []
})
export class PagoDetalleListaComponent implements OnInit {

  constructor(private service: PagoDetalleService) { }

  ngOnInit() {
    this.service.GetPagosDetalles();
  }

}

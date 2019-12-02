import { Component, OnInit } from '@angular/core';
import { PagoDetalleService } from '../../shared/service/pago-detalle.service';
import { PagoDetalle } from '../../shared/model/pago-detalle.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pago-detalle-lista',
  templateUrl: './pago-detalle-lista.component.html',
  styleUrls: []
})
export class PagoDetalleListaComponent implements OnInit {
  idRegistro = 0;
  //Se inyecta el proveedor de servicios de pagos y el proveedor de servicios de alertas y mensajes
  constructor(public service: PagoDetalleService, private toastr: ToastrService) { }
  
  ngOnInit() {
    //Se obtienen los pagos al cargarse este componente
    this.service.GetPagosDetalles();
  }
  datosForm(pd: PagoDetalle) {
    //Se obtienen los datos del registro seleccionado y se setean al objeto formData del service
    //Y se actualizan a su vez los controles de captura porque tambien ocupan el objeto formData
    this.service.formData = Object.assign({},pd);
  }
  setearId(id) {
    this.idRegistro = id;
  }

  onDelete() {
    if (this.idRegistro != 0) {
    this.service.DeletePagosDetalle(this.idRegistro)
      .subscribe(res => {
         //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        this.service.GetPagosDetalles();
        this.toastr.warning('Eliminado satisfactorio', 'Registro de detalle de pagos');
        this.idRegistro = 0
      },
        err => {
          console.log(err);
        })
    }
  }
}

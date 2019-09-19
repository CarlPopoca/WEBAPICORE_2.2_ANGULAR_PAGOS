import { Component, OnInit } from '@angular/core';
import { PagoDetalleService } from '../../shared/pago-detalle.service';
import { PagoDetalle } from '../../shared/pago-detalle.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pago-detalle-lista',
  templateUrl: './pago-detalle-lista.component.html',
  styleUrls: []
})
export class PagoDetalleListaComponent implements OnInit {
  //Se inyecta el proveedor de servicios de pagos y el proveedor de servicios de alertas y mensajes
  constructor(private service: PagoDetalleService, private toastr: ToastrService) { }

  ngOnInit() {
    //Se obtienen los pagos al cargarse este componente
    this.service.GetPagosDetalles();
  }
  datosForm(pd: PagoDetalle) {
    //Se obtienen los datos del registro seleccionado y se setean al objeto formData del service
    //Y se actualizan a su vez los controles de captura porque tambien ocupan el objeto formData
    this.service.formData = Object.assign({},pd);
  }
  onDelete(id) {
    if (confirm('Esta seguro de eliminar el registro?')) {
    this.service.DeletePagosDetalle(id)
      .subscribe(res => {
         //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        this.service.GetPagosDetalles();
        this.toastr.warning('Eliminado satisfactorio', 'Registro de detalle de pagos');
      },
        err => {
          console.log(err);
        })
    }
  }
}

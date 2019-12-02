import { Component, OnInit } from '@angular/core';
import { PagoDetalleService } from '../../shared/service/pago-detalle.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pago-detalle',
  templateUrl: './pago-detalle.component.html',
  styleUrls: []
})
export class PagoDetalleComponent implements OnInit {

  constructor(public service: PagoDetalleService, private toastr:ToastrService) {
  }

  ngOnInit() {
    //Se ejecuta el metodo resetForm al cargarse el componente
    this.reiniciarForm();
  }

  reiniciarForm(form?: NgForm) {
     //Para resetear el formulario en caso de que contenga datos el formulario
    if (form!=null)
    form.resetForm;
    //Se inicializa la variable de tipo model PagoDetalle que contiene el servicio
    this.service.formData = {
      Id:0,
      PropietarioTarjeta:'',
      NumeroTarjeta: '',
      FechaExpiracion: '',
      CVV: ''
    }
  }
  //Se da de alta o modifica un pago
  onSubmit(form: NgForm) {
    
    if (this.service.formData.Id == 0)
      this.insertarPagoDetalle(form);
    else
      this.actualizarPagoDetalle(form);
  }


  insertarPagoDetalle(form: NgForm) {

    this.service.PostPagosDetalle().subscribe(
      res => {
         //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        this.reiniciarForm(form);
        this.toastr.success('Guardado satisfactorio', 'Registro de detalle de pagos');
        this.service.GetPagosDetalles();
      },
      err => {
        //Nos proporciona un mensaje en la consola del navegador en caso de error
        console.log(err);
      }
    )
  }

  actualizarPagoDetalle(form: NgForm) {
    this.service.PutPagosDetalle().subscribe(
      res => {
        //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        this.reiniciarForm(form);
        this.toastr.info('Guardado satisfactorio', 'Registro de detalle de pagos');
        this.service.GetPagosDetalles();
      },
      err => {
        //Nos proporciona un mensaje en la consola del navegador en caso de error
        console.log(err);
      }
    )
  }

}

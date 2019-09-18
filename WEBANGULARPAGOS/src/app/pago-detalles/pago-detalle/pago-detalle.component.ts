import { Component, OnInit } from '@angular/core';
import { PagoDetalleService } from '../../shared/pago-detalle.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pago-detalle',
  templateUrl: './pago-detalle.component.html',
  styleUrls: []
})
export class PagoDetalleComponent implements OnInit {

  constructor(private service: PagoDetalleService, private toastr:ToastrService) {
  }

  ngOnInit() {
    //Se ejecuta el metodo resetForm al cargarse el componente
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form!=null)
    //Se recetea el formulario
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

  onSubmit(form: NgForm) {
    this.service.PostPagosDetalle(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Guardado satisfactorio', 'Registro de detalle de pago');
      },
      err => {
        console.log(err);
      }
    )
  }
}

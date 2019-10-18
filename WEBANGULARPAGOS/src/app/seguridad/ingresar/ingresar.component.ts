import { Component, OnInit } from '@angular/core';
import { IngresarService } from '../../shared/service/ingresar.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

  constructor(private service: IngresarService, private toastr: ToastrService) { }

  ngOnInit() {
    //Se ejecuta el metodo resetForm al cargarse el componente
    this.reiniciarForm();
  }
  reiniciarForm(form?: NgForm) {
    //Para resetear el formulario en caso de que contenga datos el formulario
    if (form != null)
      form.resetForm;
    //Se inicializa la variable de tipo model IngresarUsuario que contiene el servicio
    this.service.formData = {
      Email: '',
      Password: '',
      RemenberMe: false
    }
  }
  //Se ingresa al aplicativo
  onSubmit(form: NgForm) {

    if (this.service.formData.Email != '' && this.service.formData.Password !='')
      this.ingresarUsuario(form);
    else
      this.toastr.warning('Ingrese las credenciales del Usuario', 'Ingresar');
   
  }

  ingresarUsuario(form: NgForm) {

    this.service.PostIngresar().subscribe(
      res => {
        //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        this.reiniciarForm(form);
        console.log('Ingreso correcto');
        
      },
      err => {
        //Nos proporciona un mensaje en la consola del navegador en caso de error
        console.log(err);
      }
    )
  }

}

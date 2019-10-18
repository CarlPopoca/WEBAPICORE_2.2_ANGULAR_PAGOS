import { Component, OnInit } from '@angular/core';
import { RegistrarUsuarioService } from '../../shared/service/registrar-usuario.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html'
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(private service: RegistrarUsuarioService, private toastr: ToastrService) { }

  ngOnInit() {
    //Se ejecuta el metodo resetForm al cargarse el componente
    this.reiniciarForm();
  }
  reiniciarForm(form?: NgForm) {
    //Para resetear el formulario en caso de que contenga datos el formulario
    if (form != null)
      form.resetForm;
    //Se inicializa la variable de tipo model PagoDetalle que contiene el servicio
    this.service.formData = {
      Email: '',
      Password: '',
      ConfirmPassword: ''
    }

  }
  //Se registra el usuario
  onSubmit(form: NgForm) {

    if (this.service.formData.Email != '' && this.service.formData.Password != '' && this.service.formData.ConfirmPassword != '')
      if (this.service.formData.Password != this.service.formData.ConfirmPassword)
        this.toastr.warning('El password y la confirmación del password deben ser iguales', 'Registro de usuario');
      else
        this.ingresarUsuario(form);

    else
      this.toastr.warning('Ingrese los datos', 'Registro de usuario');

  }

  ingresarUsuario(form: NgForm) {

    this.service.PostRegistrarUsuario().subscribe(
      res => {
        //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        this.reiniciarForm(form);
        console.log('Ingreso satisfactorio');

      },
      err => {
        //Nos proporciona un mensaje en la consola del navegador en caso de error
        console.log(err);
      }
    )
  }

}

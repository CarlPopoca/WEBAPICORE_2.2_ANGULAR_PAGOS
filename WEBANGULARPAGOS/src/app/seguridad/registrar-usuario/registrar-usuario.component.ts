import { Component, OnInit } from '@angular/core';
import { RegistrarUsuarioService } from '../../shared/service/registrar-usuario.service';
import { IngresarService } from '../../shared/service/ingresar.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html'
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(private serviceRegistrar: RegistrarUsuarioService, private serviceIngresar: IngresarService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    //Se ejecuta el metodo resetForm al cargarse el componente
    this.reiniciarForm();
  }
  reiniciarForm(form?: NgForm) {
    //Para resetear el formulario en caso de que contenga datos el formulario
    if (form != null)
      form.resetForm;
    //Se inicializa la variable de tipo model PagoDetalle que contiene el servicio
    this.serviceRegistrar.formData = {
      Email: '',
      Password: '',
      ConfirmPassword: ''
    }

  }
  validacionesControles() {
    if (this.serviceRegistrar.formData.Password != this.serviceRegistrar.formData.ConfirmPassword) {
      this.toastr.warning('El password y la confirmación del password deben ser iguales', 'Registro de usuario');
      return false;
    }

    return true;
  }
  //Se registra el usuario
  onSubmit(form: NgForm) {
    var valControles = this.validacionesControles();
    if (valControles)
      this.registrarUsuario(form);
    else
      this.toastr.warning('Ingrese los datos', 'Registro de usuario');
  }
  ingresarUsuario() {
    let { Email, Password, ConfirmPassword } = this.serviceRegistrar.formData;
    this.serviceIngresar.formData = {
      Email: this.serviceRegistrar.formData.Email,
      Password: this.serviceRegistrar.formData.Password,
      RemenberMe: true
    }
    
    this.serviceIngresar.PostIngresar().subscribe(
      res => {
        //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        console.log('Ingreso correcto');
        localStorage.setItem("token", "jasdajalkcecklwcljekwej");
        this.router.navigate(['/']);
    
      },
      err => {
        //Nos proporciona un mensaje en la consola del navegador en caso de error
        this.toastr.error('Credenciales incorrectas', 'Ingresar');
        console.log(err);
      }
    )
    localStorage.setItem("token", "jasdajalkcecklwcljekwej");
    this.router.navigate(['/']);

  }
  registrarUsuario(form: NgForm) {

    this.serviceRegistrar.PostRegistrarUsuario().subscribe(
      res => {
        //Al ser satisfactoria la transacción reiniciara la forma, lanzara una alerta y actualizara la lista
        console.log('Resgitro satisfactorio');
        this.ingresarUsuario();
        this.reiniciarForm(form);
      },
      err => {
        //Nos proporciona un mensaje en la consola del navegador en caso de error
        this.toastr.error('No se pudo registrar el usuario', 'Registro de usuario');
      }
    )
  }

}

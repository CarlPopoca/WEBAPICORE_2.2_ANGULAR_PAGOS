import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { IngresarComponent } from '../seguridad/ingresar/ingresar.component';
import { RegistrarUsuarioComponent } from '../seguridad/registrar-usuario/registrar-usuario.component';
import { CerrarSesionComponent } from '../seguridad/cerrar-sesion/cerrar-sesion.component';
import { PagoDetallesComponent } from '../pago-detalles/pago-detalles.component';

export const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagodetalles', component: PagoDetallesComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'registrarusuario', component: RegistrarUsuarioComponent },
  { path: 'cerrarsesion', component: CerrarSesionComponent }
];

import { Routes, RouterModule, CanActivate, CanDeactivate} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { IngresarComponent } from '../seguridad/ingresar/ingresar.component';
import { RegistrarUsuarioComponent } from '../seguridad/registrar-usuario/registrar-usuario.component';
import { CerrarSesionComponent } from '../seguridad/cerrar-sesion/cerrar-sesion.component';
import { PagoDetallesComponent } from '../pago-detalles/pago-detalles.component';
import { PagoDetallesService } from './service/pago-detalles.service';
import { IngresarService } from './service/ingresar.service';
import { RegistrarUsuarioService } from './service/registrar-usuario.service';
import { CerrarSesionService } from './service/cerrar-sesion.service';
import { NavCandeactiveService } from './service/nav-candeactivate-service';

export const rutas: Routes = [
  
  { path: '', component: HomeComponent, canDeactivate: [NavCandeactiveService], canActivate: [NavCandeactiveService]},
  { path: 'pagodetalles', component: PagoDetallesComponent, canActivate: [PagoDetallesService] },
  { path: 'ingresar', component: IngresarComponent, canActivate: [IngresarService]},
  { path: 'registrarusuario', component: RegistrarUsuarioComponent, canActivate: [RegistrarUsuarioService] },
  { path: 'cerrarsesion', component: CerrarSesionComponent, canActivate: [CerrarSesionService]}
];

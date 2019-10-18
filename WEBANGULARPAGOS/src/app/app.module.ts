import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagoDetallesComponent } from './pago-detalles/pago-detalles.component';
import { PagoDetalleComponent } from './pago-detalles/pago-detalle/pago-detalle.component';
import { PagoDetalleListaComponent } from './pago-detalles/pago-detalle-lista/pago-detalle-lista.component';
import { PagoDetalleService } from './shared/service/pago-detalle.service';
import { RegistrarUsuarioService } from './shared/service/registrar-usuario.service';
import { IngresarService } from './shared/service/ingresar.service';
import { CerrarSesionService } from './shared/service/cerrar-sesion.service';

//Se importa modulo para ocupar Forms
import { FormsModule } from "@angular/forms";
//Se importa modulo para poder ejecutar servicios
import { HttpClientModule } from '@angular/common/http';
//Se copiaron de la URL https://www.npmjs.com/package/ngx-toastr, y se importa modulo para ocupar  alertas y mensajes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Se importa modulo para ocupar  alertas y mensajes
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { rutas } from './shared/rutas';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { IngresarComponent } from './seguridad/ingresar/ingresar.component';
import { RegistrarUsuarioComponent } from './seguridad/registrar-usuario/registrar-usuario.component';
import { CerrarSesionComponent } from './seguridad/cerrar-sesion/cerrar-sesion.component';

//Se declaran los componentes del detalle del pago en la sección declarations
//Se declaran los modulos FormsModule,HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot()en la sección imports
//Se declaran los servicios en la sección providers
@NgModule({
  declarations: [
    AppComponent,
    PagoDetallesComponent,
    PagoDetalleComponent,
    PagoDetalleListaComponent,
    HomeComponent,
    NavMenuComponent,
    IngresarComponent,
    RegistrarUsuarioComponent,
    CerrarSesionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(rutas)
  ],
  providers: [PagoDetalleService,
    IngresarService,
    RegistrarUsuarioService,
    CerrarSesionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagoDetallesComponent } from './pago-detalles/pago-detalles.component';
import { PagoDetalleComponent } from './pago-detalles/pago-detalle/pago-detalle.component';
import { PagoDetalleListaComponent } from './pago-detalles/pago-detalle-lista/pago-detalle-lista.component';
import { PagoDetalleService } from './shared/pago-detalle.service';
//Se importa modulo para ocupar Forms
import { FormsModule } from "@angular/forms";
//Se importa modulo para poder ejecutar servicios
import { HttpClientModule } from '@angular/common/http';
//Se copiaron de la URL https://www.npmjs.com/package/ngx-toastr, y se importa modulo para ocupar  alertas y mensajes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Se importa modulo para ocupar  alertas y mensajes
import { ToastrModule } from 'ngx-toastr';

//Se declaran los componentes del detalle del pago en la sección declarations
//Se declaran los modulos FormsModule,HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot()en la sección imports
//Se declaran los servicios en la sección providers
@NgModule({
  declarations: [
    AppComponent,
    PagoDetallesComponent,
    PagoDetalleComponent,
    PagoDetalleListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PagoDetalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

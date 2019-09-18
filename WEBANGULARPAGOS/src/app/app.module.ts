import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagoDetallesComponent } from './pago-detalles/pago-detalles.component';
import { PagoDetalleComponent } from './pago-detalles/pago-detalle/pago-detalle.component';
import { PagoDetalleListaComponent } from './pago-detalles/pago-detalle-lista/pago-detalle-lista.component';
import { PagoDetalleService } from './shared/pago-detalle.service';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [PagoDetalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

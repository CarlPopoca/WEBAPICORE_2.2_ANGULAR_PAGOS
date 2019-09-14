import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagosDetallesComponent } from './pagos-detalles/pagos-detalles.component';
import { PagoDetallesComponent } from './pago-detalles/pago-detalles.component';
import { PagoDetalleComponent } from './pago-detalles/pago-detalle/pago-detalle.component';
import { PagoDetalleListaComponent } from './pago-detalles/pago-detalle-lista/pago-detalle-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PagosDetallesComponent,
    PagoDetallesComponent,
    PagoDetalleComponent,
    PagoDetalleListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

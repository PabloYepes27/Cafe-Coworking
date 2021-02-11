import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { AgregarComponent } from './feature/agregar/agregar.component';
import { ActualizarComponent } from './feature/actualizar/actualizar.component';
import { EliminarComponent } from './feature/eliminar/eliminar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarComponent,
    ActualizarComponent,
    EliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

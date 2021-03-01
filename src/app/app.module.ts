import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './presentation/shared/components/toolbar/toolbar.module';
import { EstablishmentRepository } from './core/repositories/establishment/establishment.repositories';
import { EstablishmentWebRepository } from './data/establishment/establishment-web-repository/establishment-web-repository';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    HttpClientModule,
  ],
  providers: [
    { provide: EstablishmentRepository, useClass: EstablishmentWebRepository },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

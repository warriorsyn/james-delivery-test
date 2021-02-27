import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation-routing.module';



@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    PresentationRoutingModule
  ]
})
export class PresentationModule { }

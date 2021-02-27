import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation-routing.module';
import { CardModule } from './shared/components/card/card.module';



@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    CardModule
  ]
})
export class PresentationModule { }

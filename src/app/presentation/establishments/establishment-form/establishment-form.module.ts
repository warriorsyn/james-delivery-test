import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentFormComponent } from './establishment-form.component';
import { EstablishmentFormRoutingModule } from './establishment-form-routing.module';
import { SectionModule } from '../../shared/components/section/section.module';
import { CardModule } from '../../shared/components/card/card.module';



@NgModule({
  declarations: [EstablishmentFormComponent],
  imports: [
    CommonModule,
    EstablishmentFormRoutingModule,
    SectionModule,
    CardModule
  ]
})
export class EstablishmentFormModule { }

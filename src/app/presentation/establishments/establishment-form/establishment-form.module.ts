import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentFormComponent } from './establishment-form.component';
import { EstablishmentFormRoutingModule } from './establishment-form-routing.module';
import { SectionModule } from '../../shared/components/section/section.module';
import { CardModule } from '../../shared/components/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [EstablishmentFormComponent],
  imports: [
    CommonModule,
    EstablishmentFormRoutingModule,
    SectionModule,
    CardModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class EstablishmentFormModule { }

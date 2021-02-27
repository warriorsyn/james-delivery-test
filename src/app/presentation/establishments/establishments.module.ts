import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsComponent } from './establishments.component';
import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { CardModule } from '../shared/components/card/card.module';
import { SectionModule } from '../shared/components/section/section.module';



@NgModule({
  declarations: [EstablishmentsComponent],
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
    CardModule,
    SectionModule
  ]
})
export class EstablishmentsModule { }

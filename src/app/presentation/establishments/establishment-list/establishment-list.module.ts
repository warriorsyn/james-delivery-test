import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentListComponent } from './establishment-list.component';
import { EstablishmentListRoutingModule } from './establishment-list-routing.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SectionModule } from '../../shared/components/section/section.module';
import { EstablishmentCardComponent } from './establishment-card/establishment-card.component';



@NgModule({
  declarations: [EstablishmentListComponent, EstablishmentCardComponent],
  imports: [
    CommonModule,
    EstablishmentListRoutingModule,
    CardModule,
    SectionModule
  ],
})
export class EstablishmentListModule { }

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EstablishmentCardComponent {

  @Input()
  establishment!: EstablishmentModel;

}

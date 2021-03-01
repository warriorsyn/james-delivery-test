import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';
import { GetAllEstablishmentUsecase } from 'src/app/core/usecases/establishment/get-all.usecase';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss'],
})
export class EstablishmentListComponent implements OnInit {

  public establishments: Array<EstablishmentModel> = [];

  constructor(private getAllUsecase: GetAllEstablishmentUsecase) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllUsecase.execute().subscribe(item => this.establishments.push(item));
    }, 1000)
  }
}

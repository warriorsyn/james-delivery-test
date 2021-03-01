import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { EstablishmentModel } from '../../domain/establishment/establishment.model';
import { EstablishmentRepository } from '../../repositories/establishment/establishment.repositories';


@Injectable({
  providedIn: 'root',
})
export class GetAllEstablishmentUsecase implements UseCase<void, EstablishmentModel> {
  constructor(private establishmentRepository: EstablishmentRepository) { }

  execute(params: void): Observable<EstablishmentModel> {
    return this.establishmentRepository.getAll();
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { EstablishmentModel } from '../../domain/establishment/establishment.model';
import { EstablishmentRepository } from '../../repositories/establishment/establishment.repositories';


@Injectable({
  providedIn: 'root',
})
export class GetByIdEstablishmentUsecase implements UseCase<string, EstablishmentModel> {
  constructor(private establishmentRepository: EstablishmentRepository) { }

  execute(params: string): Observable<EstablishmentModel> {
    return this.establishmentRepository.getById(params);
  }
}

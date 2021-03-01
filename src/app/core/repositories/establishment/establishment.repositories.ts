import { Observable } from 'rxjs';
import { EstablishmentModel } from '../../domain/establishment/establishment.model';


export abstract class EstablishmentRepository {
  abstract getAll(params: void): Observable<EstablishmentModel>;
  abstract getById(params: string): Observable<EstablishmentModel>;
  abstract update(params: EstablishmentModel): Observable<EstablishmentModel>;
}


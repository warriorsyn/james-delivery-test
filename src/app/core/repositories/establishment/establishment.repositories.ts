import { Observable } from 'rxjs';
import { EstablishmentModel } from '../../domain/establishment/establishment.model';


export abstract class EstablishmentRepository {
  abstract getAll(): Observable<EstablishmentModel>;
}

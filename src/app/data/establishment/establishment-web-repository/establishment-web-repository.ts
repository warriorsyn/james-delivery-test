import { Injectable } from '@angular/core';
import { Observable, from, observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, flatMap, filter } from 'rxjs/operators';
import { EstablishmentRepository } from 'src/app/core/repositories/establishment/establishment.repositories';
import { EstablishmentMockRepositoryMapper } from './establishment-web-repository-mapper';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';
import { EstablishmentWebEntity } from './establishment-web-entity';


@Injectable({
  providedIn: 'root',
})
export class EstablishmentWebRepository extends EstablishmentRepository {


  public mapper = new EstablishmentMockRepositoryMapper();

  constructor(private http: HttpClient) {
    super();

    this.generateLocalStorage();
  }

  generateLocalStorage() {
    const establishments = localStorage.getItem('@establishments') === null || typeof localStorage.getItem('@establishments') === 'undefined';

    if (establishments) {

      this.mapObject();
      return;
    }
  }

  getAll(params: void): Observable<EstablishmentModel> {
    let establishments: EstablishmentWebEntity[] = this.parseJSON<EstablishmentWebEntity[]>(localStorage.getItem('@establishments'));

    return from(establishments).pipe(map(this.mapper.mapFrom))
  }

  getById(params: string): Observable<EstablishmentModel> {
    const establishments: EstablishmentWebEntity[] = this.parseJSON(this.getFromLocalStorage());

    return from(establishments).pipe(filter(e => e.id === params)).pipe(map(this.mapper.mapFrom));
  }

  getAllByApi(): Observable<EstablishmentModel[]> {
    return this.http.get<EstablishmentModel[]>(`https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments`);
  }

  parseJSON<T>(object: any): T {
    return JSON.parse(object)
  }

  mapObject(save: boolean = true): Observable<EstablishmentModel[]> {
    let mappedReturnal = new Subject<EstablishmentModel[]>();
    this.getAllByApi().subscribe(item => {
      const rest = {
        account: '',
        bank: '',
        agency: '',
        agency_digit: '',
        account_digit: '',
        account_type: '',
        withdraw: false,
        cpf_cnpj: ''
      }

      const mapped = item.map(est => ({ ...est, ...rest })) as EstablishmentModel[];
      mappedReturnal.next(mapped);
      if (save) {
        localStorage.setItem('@establishments', JSON.stringify(mapped || []));
      }


    });

    return mappedReturnal.asObservable();
  }

  getFromLocalStorage(): EstablishmentWebEntity[] {
    return localStorage.getItem('@establishments') as unknown as EstablishmentWebEntity[];
  }
}

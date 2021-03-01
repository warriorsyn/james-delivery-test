import { Injectable } from '@angular/core';
import { Observable, from, observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
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

      this.getAllByApi().subscribe(item => {
        localStorage.setItem('@establishments', JSON.stringify(item || []));
      });
      return;
    }
  }

  getAll(): Observable<EstablishmentModel> {
    const establishments: EstablishmentWebEntity[] = this.parseJSON<EstablishmentWebEntity[]>(localStorage.getItem('@establishments'));

    return from(establishments).pipe(map(this.mapper.mapFrom))
  }

  getAllByApi(): Observable<EstablishmentModel[]> {
    return this.http.get<EstablishmentModel[]>(`https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments`);
  }

  parseJSON<T>(object: any): T {
    return JSON.parse(object)
  }
}

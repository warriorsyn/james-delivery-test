import { Injectable } from '@angular/core';
import { Observable, from, observable, Subject, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { EstablishmentRepository } from 'src/app/core/repositories/establishment/establishment.repositories';
import { EstablishmentMockRepositoryMapper } from './establishment-web-repository-mapper';
import { EstablishmentModel } from 'src/app/core/domain/establishment/establishment.model';
import { EstablishmentWebEntity } from './establishment-web-entity';


@Injectable({
  providedIn: 'root',
})
export class EstablishmentWebRepository extends EstablishmentRepository {

  public mapper = new EstablishmentMockRepositoryMapper();

  private establishmentsFromApi: EstablishmentModel[] = [];

  constructor(private http: HttpClient) {
    super();

    this.generateLocalStorage();
  }

  /**
   * Generate localstogate if there is none initialized
   */
  generateLocalStorage() {
    const establishments = localStorage.getItem('@establishments') === null || typeof localStorage.getItem('@establishments') === 'undefined';

    if (establishments) {
      this.mapObject();
      return;
    }
  }

  /**
   *
   * @param params Get all establishments
   */
  getAll(params: void): Observable<EstablishmentModel> {
    let establishments: EstablishmentWebEntity[] = this.parseJSON<EstablishmentWebEntity[]>(this.getFromLocalStorage());

    if (!establishments) {
      return from(this.establishmentsFromApi).pipe(map(this.mapper.mapFrom));
    }

    return from(establishments).pipe(map(this.mapper.mapFrom))
  }

  /**
   * Return a establishment filtered by id
   * @param params Establishment Id
   */
  getById(params: string): Observable<EstablishmentModel> {
    const establishments: EstablishmentWebEntity[] = this.parseJSON(this.getFromLocalStorage());

    return from(establishments).pipe(filter(e => e.id === params)).pipe(map(this.mapper.mapFrom));
  }

  /**
   * Get establishment by api
   */

  getAllByApi(): Observable<EstablishmentModel[]> {
    return this.http.get<EstablishmentModel[]>(`https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments`);
  }

  /**
   * Parse to a Json object
   * @param object Object will be parsed
   */
  parseJSON<T>(object: any): T {
    return JSON.parse(object)
  }

  /**
   * Update an establishment
   * @param params Establishment model that will be updated
   */
  update(params: EstablishmentModel): Observable<EstablishmentModel> {
    const establishments: EstablishmentWebEntity[] = this.parseJSON(this.getFromLocalStorage());

    for (let i = 0; i < establishments.length; i++) {
      if (establishments[i].id === params.id) {
        establishments[i] = params;
      }
    }

    localStorage.setItem('@establishments', JSON.stringify(establishments));

    return of(params);
  }

  /**
   * Map the object to a final object
   * @param save If true then data will be saved at localStorage
   */
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
        cpf_cnpj: '',
        city: ''
      }

      const mapped = item.map(est => ({ ...est, ...rest })) as EstablishmentModel[];
      mappedReturnal.next(mapped);

      if (save) {
        localStorage.setItem('@establishments', JSON.stringify(mapped || []))
      }

      this.establishmentsFromApi = item;
    });

    return mappedReturnal.asObservable();
  }

  /**
   * Get establishment from localstorage
   */
  getFromLocalStorage(): EstablishmentWebEntity[] {
    return localStorage.getItem('@establishments') as unknown as EstablishmentWebEntity[];
  }
}

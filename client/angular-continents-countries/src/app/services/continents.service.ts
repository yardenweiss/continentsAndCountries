import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface ICountries {
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  currencies: { code: string, name: string, symbol: string }[];
  flag: string;
  languages: { iso639_1: string, iso639_2: string, name: string, nativeName: string }[]
  name: string
  region: string

}

export interface IContinents {
  name: string,
  code: string
}

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor(
    private apiService: ApiService) {
  }

  public getContinentsCode(): Observable<IContinents[]> {
    return this.apiService.get(`continents/code`);
  }

  public getCountries(continent: string): Observable<ICountries[]> {
    return this.apiService.get(`continents/${continent}`);
  }
}

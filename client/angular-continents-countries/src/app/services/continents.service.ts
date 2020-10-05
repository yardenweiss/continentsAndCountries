import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {


  constructor(
    private apiService: ApiService) {
  }
  
  public getContinentsCode(): Observable<any> {
    return this.apiService.get(`continents/code`);
  }

  public getCountries(continent:string): Observable<any> {
    return this.apiService.get(`continents/${continent}`);
  }
}

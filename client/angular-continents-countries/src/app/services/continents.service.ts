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
  
  public getTest(): Observable<any> {
    return this.apiService.get(`test`);
  }
}

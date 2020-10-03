import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private configService:ConfigService) { }

  public get(url: string): Observable<any> {
    return this.http.get(this.getFullUrl(url));
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(this.getFullUrl(url), data);
  }

  private getFullUrl(url):string {
    return `${this.configService.API_URL.hostname}/${url}`
  
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private CONFIG_URL: string = `../../assets/config.json`;
  public API_URL: any;

  constructor(private http: HttpClient) { }

  public loadConfig(): Promise<boolean>{

    return new Promise((resolve, reject) => {
      console.log("this.CONFIG_URL",this.CONFIG_URL)
      this.http.get(this.CONFIG_URL)
          .subscribe((data) => {

            this.API_URL = (data as any).server;
         
              console.log("API_URL ", this.API_URL);


            resolve(true)
  
          }, (error) => {
            resolve(true)
          });
        });
  
    }}


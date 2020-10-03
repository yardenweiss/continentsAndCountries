import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { ContinentsComponent } from './containers/continents/continents/continents.component';
import { ApiService } from './services/api.service';
import { ContinentsService } from './services/continents.service';
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent, CountriesComponent
  ],
  imports: [
    HttpClientModule,
    
    NgxDatatableModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      multi: true,
      deps: [ConfigService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function loadConfig(configService: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => configService.loadConfig();
}

import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { ContinentsComponent } from './containers/continents/continents/continents.component';
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from './services/config.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent, CountriesComponent
  ],
  exports:[ ],
  imports: [
    HttpClientModule,
    NgxDatatableModule ,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
    
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

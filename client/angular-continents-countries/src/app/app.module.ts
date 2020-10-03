import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { ContinentsComponent } from './containers/continents/continents/continents.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent, CountriesComponent
  ],
  imports: [
    NgxDatatableModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // exports:[ContinentsComponent, CountriesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

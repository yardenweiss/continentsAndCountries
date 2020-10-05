import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { ContinentsComponent } from './containers/continents/continents/continents.component';

const routes: Routes = [
  {
    path: '',
    component: ContinentsComponent,
  },
  {path: ':continent', component: CountriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

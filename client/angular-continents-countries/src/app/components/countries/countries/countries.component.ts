import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentsService } from 'src/app/services/continents.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  continent: any;
  paramsSubscription: any;
  countries=[];
  constructor(private continentsService:ContinentsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe( params => {
      this.continent = params.continent;
      this.continentsService.getCountries( this.continent)
        .subscribe(data =>{
          this.countries = data;
        })

    });
  }

  public clickBack(){
    this.router.navigate([`../`], { relativeTo: this.route });
  }

  public onImgError(event) {
    event.target.src = "https://www.countryflags.io/IL/shiny/64.png";
 }

}

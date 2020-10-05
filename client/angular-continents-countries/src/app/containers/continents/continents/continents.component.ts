import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentsService } from 'src/app/services/continents.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  public rows;
  columns = [{ prop: 'name' }, { name: 'code' }];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private continentsService:ContinentsService
    ) { }

  ngOnInit(): void {

    this.continentsService.getContinentsCode()
      .subscribe(data=>{
        this.rows = data;
      })
  }

  public onActivate(event) {

    if(event.type === "click" ) {
      const continent = event.row.name;
      this.router.navigate(['', continent], { relativeTo: this.route });
    }

  }

}

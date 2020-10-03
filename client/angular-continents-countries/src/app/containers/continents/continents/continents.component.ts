import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentsService } from 'src/app/services/continents.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private continentsService:ContinentsService
    ) { }

  ngOnInit(): void {

    this.continentsService.getTest()
      .subscribe(data=>{
        console.log("---",data)
      })
  }

  public onActivate(event) {

    if(event.type === "click" ) {
      const name = event.row.name;
      this.router.navigate(['', name], { relativeTo: this.route });
    }

  }

}

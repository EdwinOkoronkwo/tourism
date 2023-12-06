import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetcitiesService } from '../../services/getcities.service';
import { ICitiesInfo } from './icities-info';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, DividerComponent],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent implements OnInit {
  cities!: ICitiesInfo[];
  // id;
  color!: boolean;

  constructor(
    private _cities: GetcitiesService,
    private router: Router,
    private routeService: ActivatedRoute
  ) {
    // let id = routeService.snapshot.paramMap.get('id');
    // console.log(id);
  }

  ngOnInit() {
    this.cities = this._cities.getCities();
    this.color = this.colorit();
  }

  colorit() {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length < 3) {
        return false;
      }
    }
    return true;
  }

  weatherPage() {
    this.router.navigate([`../weather`]);
  }
}

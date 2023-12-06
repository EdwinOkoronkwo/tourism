import { Injectable } from '@angular/core';
import { ICitiesInfo } from '../components/cities/icities-info';
import { CitiesInfo } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root',
})
export class GetcitiesService {
  private cities: ICitiesInfo[] = CitiesInfo;

  constructor() {}

  getCities() {
    return this.cities;
  }
}

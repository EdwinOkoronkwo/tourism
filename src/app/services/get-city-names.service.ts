import { Injectable } from '@angular/core';
import { GetweatherService } from './getweather.service';
import { IWeatherInfo } from '../components/weather/iweather-info';

@Injectable({
  providedIn: 'root',
})
export class GetCityNamesService {
  //const result: any[] = [];
  arrayWeather: any;

  arrayNames: string[] = [];

  constructor(private _getW: GetweatherService) {}

  getNames() {
    this.arrayNames = [];
    this.arrayWeather = this._getW.getWeather();
    for (var i = 0; i < this.arrayWeather.length; i++) {
      this.arrayNames.push(this.arrayWeather[i].name);
    }
    return this.arrayNames;
  }
}

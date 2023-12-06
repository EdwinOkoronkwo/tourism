import { Injectable } from '@angular/core';
import { IWeatherInfo } from '../components/weather/iweather-info';
import { citiesWeather } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root',
})
export class GetweatherService {
  [x: string]: any;
  private weather: IWeatherInfo[] = citiesWeather;
  month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor() {}

  getWeather(): IWeatherInfo[] {
    return this.weather;
  }

  getStatistics(data: IWeatherInfo) {
    const { id, name, visitTo, visitFrom, image, ...rest } = data;
    let tempObj = rest;
    const sumValues = Object.values(tempObj).reduce((a, b) => a + b, 0);
    const result = {
      avg: Math.round(sumValues / Object.values(tempObj).length),
      max: Math.max(...Object.values(tempObj)),
      min: Math.min(...Object.values(tempObj)),
    };
    return result;
  }

  visitFrom(data: IWeatherInfo) {
    const { visitFrom } = data;
    return this.month[visitFrom];
  }

  visitTo(data: IWeatherInfo) {
    const { visitTo } = data;
    return this.month[visitTo];
  }
}

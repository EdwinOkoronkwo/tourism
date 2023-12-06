import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IWeatherInfo, Month } from '../../../components/weather/iweather-info';
import { GetweatherService } from '../../../services/getweather.service';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css',
})
export class WeatherDetailsComponent implements OnInit {
  weather!: IWeatherInfo;

  constructor(
    private route: ActivatedRoute,
    private _weatherData: GetweatherService
  ) {
    // const routeParams = this.route.snapshot.paramMap;
    // const weatherIdFromRoute = Number(routeParams.get('id'));
    // this.weather = this._weatherData
    //   .getWeather()
    //   .find((weather) => weather.id === weatherIdFromRoute);
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const weatherIdFromRoute = Number(routeParams.get('id'));
    let weather = this._weatherData
      .getWeather()
      .find((weather) => weather.id === weatherIdFromRoute);
    if (weather !== undefined) {
      this.weather = weather;
    }
  }
  stats() {
    const result = {
      avg: this._weatherData.getStatistics(this.weather).avg,
      max: this._weatherData.getStatistics(this.weather).max,
      min: this._weatherData.getStatistics(this.weather).min,
    };
    return result;
  }

  visitFrom() {
    return this._weatherData.visitFrom(this.weather);
  }

  visitTo() {
    return this._weatherData.visitTo(this.weather);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeatherInfo } from '../../components/weather/iweather-info';
import { GetweatherService } from '../../services/getweather.service';
import { WeatherAlertsComponent } from '../weather-alerts/weather-alerts.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [
    CommonModule,
    WeatherAlertsComponent,
    WeatherDetailsComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent implements OnInit {
  weatherData!: IWeatherInfo[];

  constructor(private _weatherData: GetweatherService) {}

  ngOnInit() {
    this.weatherData = this._weatherData.getWeather();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeatherInfo } from '../iweather-info';
import { GetweatherService } from '../../../services/getweather.service';

@Component({
  selector: 'app-luxor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luxor.component.html',
  styleUrl: './luxor.component.css',
})
export class LuxorComponent {
  title = 'Luxor';
  weatherData!: IWeatherInfo[];
  visitFromMonth = '';
  visitToMonth = '';

  constructor(private _weatherData: GetweatherService) {}

  ngOnInit() {
    this.weatherData = this._weatherData
      .getWeather()
      .filter((m) => m.name === 'Luxor');
    this.visitFromMonth = this.visitFrom();
    this.visitToMonth = this.visitTo();
  }

  stats() {
    const result = {
      avg: this._weatherData.getStatistics(this.weatherData?.[0]).avg,
      max: this._weatherData.getStatistics(this.weatherData?.[0]).max,
      min: this._weatherData.getStatistics(this.weatherData?.[0]).min,
    };
    return result;
  }

  visitFrom() {
    return this._weatherData.visitFrom(this.weatherData?.[0]);
  }

  visitTo() {
    return this._weatherData.visitTo(this.weatherData?.[0]);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeatherInfo } from '../../components/weather/iweather-info';

@Component({
  selector: 'app-weather-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-alerts.component.html',
  styleUrl: './weather-alerts.component.css',
})
export class WeatherAlertsComponent {
  @Input() weatherData!: IWeatherInfo[];
  @Output() notify = new EventEmitter();
}

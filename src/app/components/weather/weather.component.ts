import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeatherInfo } from './iweather-info';
import { GetweatherService } from '../../services/getweather.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CairoComponent } from './cairo/cairo.component';
import { AswanComponent } from './aswan/aswan.component';
import { SharmComponent } from './sharm/sharm.component';
import { LuxorComponent } from './luxor/luxor.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { TabsComponent } from '../../weather/tabs/tabs.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CairoComponent,
    AswanComponent,
    SharmComponent,
    LuxorComponent,
    DividerComponent,
    TabsComponent,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  weatherData?: IWeatherInfo[];

  constructor(
    private _weatherData: GetweatherService,
    private router: Router,
    private routeService: ActivatedRoute
  ) {}

  ngOnInit() {
    this.weatherData = this._weatherData.getWeather();
  }

  weatherPage() {
    this.router.navigate([`../weather/weather-list`]);
  }
}

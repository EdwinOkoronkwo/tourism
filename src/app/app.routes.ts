import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather/weather-list/weather-details/weather-details.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { HomeComponent } from './components/home/home.component';
import { CairoComponent } from './components/weather/cairo/cairo.component';
import { AswanComponent } from './components/weather/aswan/aswan.component';
import { LuxorComponent } from './components/weather/luxor/luxor.component';
import { SharmComponent } from './components/weather/sharm/sharm.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';

export const routes: Routes = [
  {
    path: 'weather/:name/:springN/:springM/:summerN/:summerM/:autumnN/:autumnM/:visitFrom/:visitTo',
    component: WeatherDetailsComponent,
  },
  {
    path: 'cities',
    component: CitiesComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
    children: [
      { path: '', component: CairoComponent },
      { path: 'aswan', component: AswanComponent },
      { path: 'luxor', component: LuxorComponent },
      { path: 'sharm', component: SharmComponent },
      {
        path: 'weather-list',
        component: WeatherListComponent,
        // children: [{ path: ':id', component: WeatherDetailsComponent }],
      },
      { path: 'weather-list/:id', component: WeatherDetailsComponent },
    ],
  },

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tech-ideas',
    component: TechIdeasComponent,
  },
];

import { IWeatherInfo, Month } from '../weather/iweather-info';
import { ICitiesInfo } from './icities-info';

export const CitiesInfo: ICitiesInfo[] = [
  {
    id: 1,
    name: 'Aswan',
    attractionSites: [
      'Abu-Simbel',
      'Nubian Museum',
      'Elephantine',
      'High Dam & Obelisk',
    ],
  },
  {
    id: 2,
    name: 'Cairo',
    attractionSites: [
      'The Pyramids',
      'Nile',
      'Kan elKhalili',
      'Mosque of Mohammad Ali',
    ],
  },
  {
    id: 3,
    name: 'Luxor',
    attractionSites: [
      'Valley of the Kings',
      'Karnak',
      'Luxor Template',
      'Colossi of Memnon',
    ],
  },
  {
    id: 4,
    name: 'Sharm El-Sheikh',
    attractionSites: [
      'Naama',
      'Ras Muhammad National Park',
      'Mustafa Mosque',
      'White Island',
    ],
  },
];

export const citiesWeather: IWeatherInfo[] = [
  {
    id: 1,
    name: 'Aswan',
    springN: 23,
    springM: 40,
    summerN: 28,
    summerM: 43,
    winterN: 12,
    winterM: 25,
    autumnN: 22,
    autumnM: 36,
    visitFrom: Month.October,
    visitTo: Month.April,
  },
  {
    id: 2,
    name: 'Cairo',
    springN: 18,
    springM: 30,
    summerN: 23,
    summerM: 35,
    winterN: 10,
    winterM: 20,
    autumnN: 20,
    autumnM: 30,
    visitFrom: Month.December,
    visitTo: Month.January,
  },
  {
    id: 3,
    name: 'Luxor',
    springN: 17,
    springM: 35,
    summerN: 25,
    summerM: 41,
    winterN: 8,
    winterM: 24,
    autumnN: 13,
    autumnM: 29,
    visitFrom: Month.October,
    visitTo: Month.April,
  },
  {
    id: 4,
    name: 'Sharm Elsheikh',
    springN: 21,
    springM: 30,
    summerN: 29,
    summerM: 38,
    winterN: 16,
    winterM: 24,
    autumnN: 20,
    autumnM: 28,
    visitFrom: Month.October,
    visitTo: Month.November,
  },
];

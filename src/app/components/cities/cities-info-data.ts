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
    image:
      'https://images.unsplash.com/photo-1557640047-75c97a5f1ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXN3YW58ZW58MHx8MHx8fDA%3D',
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
    image:
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fpcm98ZW58MHx8MHx8fDA%3D',
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
    image:
      'https://plus.unsplash.com/premium_photo-1694475222001-b10ed72025a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4b3J8ZW58MHx8MHx8fDA%3D',
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
    image:
      'https://images.unsplash.com/photo-1562972661-a704b05a8a05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoYXJtYSUyMGVsc2hlaWtofGVufDB8fDB8fHww',
  },
];

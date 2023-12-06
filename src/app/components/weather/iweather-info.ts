export interface IWeatherInfo {
  id: number;
  name: string;
  springM: number;
  springN: number;
  summerM: number;
  summerN: number;
  winterM: number;
  winterN: number;
  autumnM: number;
  autumnN: number;
  visitFrom: Month;
  visitTo: Month;
  image: string;
}

export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

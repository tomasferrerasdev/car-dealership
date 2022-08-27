import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Dodge',
    model: 'Challenger',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Ek9',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Supra',
  },
];

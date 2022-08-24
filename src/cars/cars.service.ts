import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Dodge',
      model: 'challenger',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Gran torino',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: '${id}' not found`);

    return car;
  }
}

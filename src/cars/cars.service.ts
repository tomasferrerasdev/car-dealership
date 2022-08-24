import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Dodge',
      model: 'challenger',
    },
    {
      id: 2,
      brand: 'Jeep',
      model: 'Cherokee',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Gran torino',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: '${id}' not found`);

    return car;
  }
}

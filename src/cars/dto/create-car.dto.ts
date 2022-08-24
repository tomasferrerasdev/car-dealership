import { IsBoolean, isString, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  @MinLength(1)
  readonly model: string;
}

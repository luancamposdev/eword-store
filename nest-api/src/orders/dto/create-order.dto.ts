import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
  items: OrderItemDTO[];

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  card_hash: string;
}

export class OrderItemDTO {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  product_id: string;
}

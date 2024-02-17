export class CreateOrderDto {
  items: OrderItemDTO[];

  card_hash: string;
}

export class OrderItemDTO {
  quantity: number;

  product_id: string;
}

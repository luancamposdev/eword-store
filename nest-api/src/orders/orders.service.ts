import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { In, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    private amqpConnection: AmqpConnection,
  ) {}
  async create(createOrderDto: CreateOrderDto & { client_id: string }) {
    const productIds = createOrderDto.items.map((item) => item.product_id);
    const uniqueProductIds = [...new Set(productIds)];
    const products = await this.productRepo.findBy({
      id: In(uniqueProductIds),
    });

    if (products.length !== uniqueProductIds.length) {
      throw new Error(
        `Produto não existe. Produtos ${productIds}, Produtos encontrados ${products.map((product) => product.id)} `,
      );
    }

    const order = Order.create({
      client_id: createOrderDto.client_id,
      items: createOrderDto.items.map((item) => {
        const product = products.find(
          (product) => product.id === item.product_id,
        );
        return {
          price: product.price,
          product_id: item.product_id,
          quantity: item.quantity,
        };
      }),
    });
    await this.orderRepo.save(order);
    await this.amqpConnection.publish('amq.direct', 'OrderCreated', {
      order_id: order.id,
      card_hash: createOrderDto.card_hash,
      total: order.total,
    });
    return order;
  }

  findAll(client_id: string) {
    return this.orderRepo.find({
      where: { client_id },
      order: { created_at: 'DESC' },
    });
  }

  findOne(id: string, client_id: string) {
    return this.orderRepo.findOneByOrFail({
      id,
      client_id,
    });
  }
}

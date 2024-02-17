import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { In, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderData } from './entities/order-data.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderData) private orderRepo: Repository<OrderData>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
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

    const order = OrderData.create({
      client_id: '123138484dwdqdwef_rgregre',
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
    return order;
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }
}

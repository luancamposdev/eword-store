import { NestFactory } from '@nestjs/core';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '8c2d6912-b9ef-41da-8459-a9cae53e762c',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 135,
      image_url: 'http://via.placeholder.com/158',
    },
    {
      id: 'fa34g4b9-08ab-46a4-8c73-36f7e7388fae',
      name: 'Product 2',
      description: 'Product 2 description',
      price: 250,
      image_url: 'http://via.placeholder.com/150',
    },
    {
      id: '4549d5be-a050-4dbf-b2ab-68cc59481da9',
      name: 'Product 3',
      description: 'Product 3 description',
      price: 250,
      image_url: 'http://via.placeholder.com/150',
    },
    {
      id: '2tb629bb-df16-4319-bfdd-bda5e75c85d1',
      name: 'Product 4',
      description: 'Product 4 description',
      price: 250,
      image_url: 'http://via.placeholder.com/150',
    },
    {
      id: '21l61afc-2584-4a1f-9fcc-cfeb8bfdd1fb',
      name: 'Product 5',
      description: 'Product 5 description',
      price: 250,
      image_url: 'http://via.placeholder.com/150',
    },
  ]);

  await app.close();
}

bootstrap();

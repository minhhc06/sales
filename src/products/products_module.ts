import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products_controller';
import { ProductsService } from './products_service';
import { ProductRepository } from './products_repository'

@Module({
    imports: [ TypeOrmModule.forFeature([ ProductRepository ])],
    controllers: [ProductsController],
    providers: [ProductsService],
  })


export class ProductsModule {}
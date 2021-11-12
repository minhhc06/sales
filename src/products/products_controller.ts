import { Body, Controller, Delete, Get, Param, Patch, Post, Query,  UploadedFile, UseInterceptors} from '@nestjs/common';
import { serialize, deserialize } from 'class-transformer';
import { ProductsDto } from './dto/products_dto';
import { ProductsService } from './products_service';
import { Products } from './products_entity';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}
   @Get()
     async getProducts() {
      const user = serialize(await this.productsService.getproducts());
      return {
        status: 200,
        message: 'ok',
        data: deserialize(Products, user)
      };
    }

    @Post()
    createTask(@Body() productsDto: ProductsDto) : Promise<Products>{
      return this.productsService.createProducts(productsDto);
    }

}
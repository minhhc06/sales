import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './products_repository';
import { ProductsDto } from './dto/products_dto';
import { Products } from './products_entity';


@Injectable()
export class ProductsService  {
    constructor(
        @InjectRepository(ProductRepository) 
        private productRepository: ProductRepository,
    ){}

    getproducts(): Promise<Products[]>{
        return this.productRepository.getProducts();
    }

    createProducts(product: ProductsDto): Promise<Products>{
        return this.productRepository.createTask(product);
    }

}
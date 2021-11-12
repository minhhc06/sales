import { EntityRepository, Repository } from 'typeorm';
import { Products } from './products_entity';
import { ProductsDto } from './dto/products_dto';
import { InternalServerErrorException , UploadedFile} from '@nestjs/common';


@EntityRepository(Products)
export class ProductRepository extends Repository<Products> {

  async getProducts(): Promise<Products[]> {
    const query = this.createQueryBuilder('Products');

    try {
        const tasks = await query.getMany();
        return tasks;
        
      } catch (error) {
        throw new InternalServerErrorException();
      }

}

async createTask(productsDto: ProductsDto) : Promise<Products>{
    const { title , content, price, id_category, image_name} = productsDto;

    const account = this.create({
      title,
      content,
      price,
      id_category,
      image_name
    });

    await this.save(account);
    return account;
}





}
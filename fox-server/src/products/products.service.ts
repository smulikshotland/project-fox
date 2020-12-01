import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products)private productDb:Repository<Products>){}

  public async create(product: CreateProductDto): Promise<Products> {
        return await this.productDb.save(product);
  }

  public async findHatsCategory(): Promise<Products[]> {
    return await this.productDb.find({where:{category:'כובעים'}});
  }
  public async findPinsCategory(): Promise<Products[]> {
    return await this.productDb.find({where:{category:'סיכות'}});
  }
  public async findMovieCategory(): Promise<Products[]> {
    return await this.productDb.find({where:{category:'סרטים'}});
  }


  async update(name: string, price:string, image:String,category:string, id:string) {
    return await this.productDb.update(id,{name,price,image,category});
  }

  async remove(id: number) {
await this.productDb.delete(id) 

return `הוסר משתמש ${id} ` 
}
getProduct(id:string){
  return this.productDb.find({where:{id:id}})
}

}

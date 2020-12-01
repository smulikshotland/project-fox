import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/products.entity';
import { Repository } from 'typeorm';
import { createShoppingCartDto } from './dto/create-ShoppingCart.dto';
import { shoppingCart } from './entities/ShoppingCart.entity';

@Injectable()
export class ShoppingCartService {
  constructor(@InjectRepository(shoppingCart)private ShoppingCartDb:Repository<Products>){}
  
  public async create(ShoppingCart: createShoppingCartDto): Promise<Products> {
    // let porduct = new shoppingCart()
    // const {} = ShoppingCart
    console.log('service',ShoppingCart);
    
    
    return await this.ShoppingCartDb.save(ShoppingCart);
  }
  
  async findAllShoppingCardByUser(): Promise<Products[]> {
    return await this.ShoppingCartDb.find( );
  }
  
  async update(name: string, price:string, image:String, id:number) {
    return await this.ShoppingCartDb.update(id,{name,price,image});
  }
  
  async remove(id: number) {
    await this.ShoppingCartDb.delete(id) ;
    return this.findAllShoppingCardByUser()
    
    // return `הוסרה הזמנה ${id} ` 
  }
  
 findOne(id){
   console.log(id);
  
   return  this.ShoppingCartDb.find({id})

  }
     getShoppingCart(id: string) {
       return this.ShoppingCartDb.find({relations: ['usersId'], where: {usersId: id}});
     }
    
}

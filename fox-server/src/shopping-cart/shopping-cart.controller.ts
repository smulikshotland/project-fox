import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createShoppingCartDto } from './dto/create-ShoppingCart.dto';
import { ShoppingCartService } from './shopping-cart.service';

@Controller('shopping-cart')
export class ShoppingCartController {

    constructor(private readonly ShoppingCartService:ShoppingCartService) {}
  
  @Post('post')
  create(@Body() createShoppingCartDto: createShoppingCartDto) {
    console.log('cont ', createShoppingCartDto);
    
     return this.ShoppingCartService.create(createShoppingCartDto);
  }
   
  @Get(':id')
  async findAll(@Param('id') id: string) {
    let y = await this.ShoppingCartService.getShoppingCart(id);
    return y
    
  }
  



  @Delete(':id')
  remove(@Param('id') id: string) {
     return this.ShoppingCartService.remove(+id);

  }
}

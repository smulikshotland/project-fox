import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { shoppingCart } from './entities/ShoppingCart.entity';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

@Module({
    imports :[TypeOrmModule.forFeature([shoppingCart])
 ],
 controllers: [ShoppingCartController],
  providers: [
    ShoppingCartService],
})
export class ShoppingCartModule {}

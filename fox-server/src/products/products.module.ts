import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Products } from './entities/products.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports :[TypeOrmModule.forFeature([Products, Users])
 ],
 controllers: [ProductsController],
  providers: [
    ProductsService,UsersService],
})
export class ProductsModule {}

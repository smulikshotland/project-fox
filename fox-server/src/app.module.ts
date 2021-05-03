import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { Products } from './products/entities/products.entity';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { shoppingCart } from './shopping-cart/entities/ShoppingCart.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../','../', 'client'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgres://yejkkbtv:1S75IWChktziTb2Q6gmMTsXx2Dp05V6W@kandula.db.elephantsql.com:5432/yejkkbtv",
      autoLoadEntities: true,
      synchronize: true,
    }), UsersModule, ProductsModule, ShoppingCartModule
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {
  constructor() {

  }
}

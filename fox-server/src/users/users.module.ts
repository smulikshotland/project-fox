import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth/auth.controller';
import { AuthService } from 'src/auth/auth/auth.service';

@Module({
  imports :[TypeOrmModule.forFeature([Users]),
  JwtModule.register({secret:'shmulik amelech'})
],
  controllers: [UsersController, AuthController],
  providers: [UsersService,AuthService],

})
export class UsersModule {}

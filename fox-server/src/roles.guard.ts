import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
import { Observable } from 'rxjs';
import { Users } from './users/entities/user.entity';
import { userRoleAdmin } from './users/userRoleAdmin';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

        const roles = this.reflector.get<string[]>('roles', context.getHandler());

   const user={
     name:"שמואל",
     email:"shmolik1990@gmail.com",
     password:123456,
     
   }
   return true
  }
}

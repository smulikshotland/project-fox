import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('login')
    validateUser(@Body() user: CreateUserDto) {
        console.log(this.authService.login(user));
        
        return this.authService.login(user);
    }    
}

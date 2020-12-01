import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, ForbiddenException, BadRequestException, Patch, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post('post')
  create(@Body() createUserDto: CreateUserDto) {
    console.log("post")
    return this.usersService.create(createUserDto);
  }
  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id',ValidationPipe) id: string) {
    // throw new BadRequestException();
    return this.usersService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: string, @Body() user: UpdateUserDto) {
    const {name , lastName, addres, email, password} = user
    
    return this.usersService.update(name,lastName,addres,email,password,id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  
}

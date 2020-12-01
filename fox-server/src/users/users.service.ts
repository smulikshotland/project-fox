import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getMaxListeners } from 'process';
import { ObjectID, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users)private userDb:Repository<Users>){}

  public async create(user: CreateUserDto): Promise<Users> {

    const {name,lastName,addres,email,password}=user
    
    const newUser=new Users()
    newUser.name=name
    newUser.lastName=lastName
    newUser.addres=addres
    newUser.email=email
    newUser.password=password
    if(email=='shmolik1990@gmail.com'){
      newUser.role="admin"

    }
    else{
      newUser.role="user"

    }
    console.log(newUser);
    

    return await this.userDb.save(newUser);
  }

  async findAll(): Promise<Users[]> {
    return await this.userDb.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} user`;
  }

  async update(name: string,lastName:string,addres:string,email:string,password:string, id:string) {
    return await this.userDb.update(id,{name,lastName,addres,email,password});
  }

  async remove(id: number) {
await this.userDb.delete(id) 
return `הוסר משתמש ${id} ` 
}
public async findByEmail(email: string,password:string): Promise<Users | null> {
  const user = await this.userDb.find({  email:email, password:password });
  console.log(user);
  
  if (user) {
    console.log("user by email",user);
    return user[0];
  }

 
  throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
  
}
}


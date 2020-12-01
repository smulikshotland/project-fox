import { IsEmail } from "class-validator";

export class CreateUserDto {
    id: string;

    name: string;

    lastName:string

    addres:string;

    email:string;

    password:string;
    
    accessToken?:string

    // role:string
}

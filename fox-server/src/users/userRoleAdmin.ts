import { Admin } from "typeorm";
import { Users } from "./entities/user.entity";

export class userRoleAdmin{
    email:string

    role:Admin
}
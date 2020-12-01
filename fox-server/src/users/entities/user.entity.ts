import { IsEmail} from 'class-validator';
import { Products } from 'src/products/entities/products.entity';
import { shoppingCart } from 'src/shopping-cart/entities/ShoppingCart.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Unique,
    OneToMany,
    
} from 'typeorm';

@Entity()
@Unique(["email"])
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string|number;
    
    // lastNam@OneToMany(() => shoppingCart, (shoppingCart:shoppingCart)=>shoppingCart.userId)
    @Column()
    name: string;

    @Column()
    lastName:string;

    @Column()
    addres:string;

    @Column()
    @IsEmail()
    email:string;

    @Column()
    password:string;

    @Column()
    role:string;

    
    

    
}

  

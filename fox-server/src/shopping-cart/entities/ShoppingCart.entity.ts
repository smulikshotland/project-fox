import { Products } from "src/products/entities/products.entity";
import { Users } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class shoppingCart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string|number;

    @Column()
    name: string;

    @Column()
    date:string;

    @Column()
    sizeOfTheHat:string;

    @Column()
    email:string;

    @Column()
    price:string;
    
    @Column()
    image:String;

    @Column()
    widthOfTheHat:string;

    @ManyToOne( () => Users)
    usersId: Users
    // @JoinColumn({ name: 'userId'})

    @ManyToOne( () => Products)
    // @JoinColumn({ name: 'productId'})
    productsId: Products
    
    


    

}
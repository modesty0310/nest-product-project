import { ProductSaleslocation } from "src/api/productSaleslocation/entities/productSaleslocation.entity"
import { ProductCategory } from "src/api/productCategory/entities/productCategory.entity"
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "src/api/users/entities/user.entity"
import { ProductTag } from "src/api/productTags/entities/productTag.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    @Field(() => String)
    id: string;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => Int)
    @Column()
    price: number;

    @Field(() => Boolean)
    @Column({default: false})
    isSoldout: boolean;

    @Field(() => Date)
    @DeleteDateColumn()
    deletedAt: Date;

    @JoinColumn()
    @OneToOne(() => ProductSaleslocation)
    @Field(() => ProductSaleslocation)
    productSaleslocation: ProductSaleslocation;

    @ManyToOne(() => ProductCategory)
    @Field(() => ProductCategory)
    productCategory: ProductCategory;

    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @ManyToMany(() => ProductTag, (productTags) => productTags.id)
    @Field(() => [ProductTag])
    productTags: ProductTag[];
}
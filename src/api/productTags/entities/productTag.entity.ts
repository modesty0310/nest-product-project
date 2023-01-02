import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "src/api/product/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class ProductTag {
    @PrimaryGeneratedColumn("uuid")
    @Field(() => String)
    id: string

    @Column()
    @Field(() => String)
    name: string

    @ManyToMany(() => Product, (products) => products.id)
    @Field(() => [Product])
    products: Product[];
}
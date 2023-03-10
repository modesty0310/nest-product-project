import { Field, Float, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class ProductSaleslocation {
    @PrimaryGeneratedColumn("uuid")
    @Field(() => String)
    id: string

    @Column()
    @Field(() => String)
    address: string

    @Column()
    @Field(() => String)
    addressDetail: string

    @Column()
    @Field(() => Float)
    lat: number

    @Column()
    @Field(() => Float)
    lan: number

    @Column()
    @Field(() => Date)
    meetingTime: Date
}
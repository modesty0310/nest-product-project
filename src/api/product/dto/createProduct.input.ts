import { Field, InputType, Int } from "@nestjs/graphql";
import { Min } from "class-validator";
import { CreateProductSaleslocationInput } from "src/api/productSaleslocation/dto/createProductSaleslocation.input";

@InputType()
export class CreateProductInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Min(0)
    @Field(() => Int)
    price: number;

    @Field(() => CreateProductSaleslocationInput)
    createProductSaleslocationInput: CreateProductSaleslocationInput;
}
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { CreateProductInput } from "./dto/createProduct.input";
import { Product } from "./entities/product.entity";
import { ProductService } from "./product.service";

@Resolver()
export class ProductResolver {
    constructor(private readonly productService: ProductService){}

    @Mutation(() => Product)
    createProcut(
        @Args('createProductInput') createProductInput: CreateProductInput,
    ){
        return this.productService.create({createProductInput});
    }

}
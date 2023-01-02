import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { ProductCategory } from "./entities/productCategory.entity";
import { ProductCategoryService } from "./productCategory.service";

@Resolver()
export class ProductCategoryResolver {
    constructor(private readonly productCategoryService: ProductCategoryService){}

    @Mutation(() => ProductCategory)
    createProcutCategory(
        @Args('name') name: string,
    ){
        return this.productCategoryService.create({name});
    }

    @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
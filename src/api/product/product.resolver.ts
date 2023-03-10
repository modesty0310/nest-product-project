import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { CreateProductSaleslocationInput } from "../productSaleslocation/dto/createProductSaleslocation.input";
import { CreateProductInput } from "./dto/createProduct.input";
import { UpdateProductInput } from "./dto/updateProduct.input";
import { Product } from "./entities/product.entity";
import { ProductService } from "./product.service";

@Resolver()
export class ProductResolver {
    constructor(private readonly productService: ProductService){}

    @Query(() => [Product])
    fetchProducts(){
        return this.productService.findAll();
    }
    
    @Query(() => Product)
    fetchProduct(
        @Args("productId") productId: string,
    ){
        return this.productService.findOne({productId});
    }

    @Mutation(() => Product)
    createProcut(
        @Args('createProductInput') createProductInput: CreateProductInput,
    ){
        return this.productService.create({createProductInput});
    }

    @Mutation(() => Product)
    updateProduct(
        @Args('productId') productId: string,
        @Args('updateProductInput') updateProductInput: UpdateProductInput
    ){
        this.productService.checkSoldout({productId});

        return this.productService.update({productId, updateProductInput}); 
    }

    @Mutation(() => Boolean)
    deleteProduct(
        @Args('productId') productId: string,
    ) {
        return this.productService.delete({productId});
    }
}
import { HttpException, HttpStatus, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductSaleslocation } from "../productSaleslocation/entities/productSaleslocation.entity";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

        @InjectRepository(ProductSaleslocation)
        private readonly productSaleslocationRepository: Repository<ProductSaleslocation>
    ){}

    async findAll() {
        return await this.productRepository.find();
    }

    async findOne({productId}) {
        return await this.productRepository.findOne({where: {id:productId}});
    }

    async create({createProductInput}) {
        const {createProductSaleslocationInput, ...product} = createProductInput;
        console.log(createProductSaleslocationInput, product);
        
        const locatinInfo = await this.productSaleslocationRepository.save({
            ...createProductSaleslocationInput,
        });
        const result = await this.productRepository.save({
            productSaleslocation: {
                ...locatinInfo
            },
            ...product
        })
        return result;
    }

    async update({productId, updateProductInput}) {
        return await this.productRepository.save({
            id: productId,
            ...updateProductInput
        })
    }

    async checkSoldout({productId}) {
        const product = await this.productRepository.findOne({where: {id: productId}});

        if(product.isSoldout){
            throw new HttpException("이미 판매 완료된 상품입니다.", HttpStatus.CONFLICT)
        }

        // if(product.isSoldout) {
        //     throw new UnprocessableEntityException("이미 판매가 완료된 상품")
        // }
    }

    async delete ({productId}) {
        const result = await this.productRepository.softRemove({id: productId});
        return result ? true : false;
    }
}
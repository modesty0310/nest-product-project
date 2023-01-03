import { InputType, OmitType } from "@nestjs/graphql";
import { ProductSaleslocation } from "../entities/productSaleslocation.entity";

@InputType()
export class CreateProductSaleslocationInput extends OmitType(
    ProductSaleslocation,
    ["id"],
    InputType
    ){}
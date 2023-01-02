import { ProductSaleslocation } from "src/api/productSaleslocation/entities/productSaleslocation.entity"
import { ProductCategory } from "src/api/productCategory/entities/productCategory.entity"
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "src/api/users/entities/user.entity"
import { ProductTag } from "src/api/productTags/entities/productTag.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    isSoldout: boolean;

    @JoinColumn()
    @OneToOne(() => ProductSaleslocation)
    productSaleslocation: ProductSaleslocation;

    @ManyToOne(() => ProductCategory)
    productCategory: ProductCategory;

    @ManyToOne(() => User)
    user: User;

    @ManyToMany(() => ProductTag, (productTags) => productTags.id)
    productTags: ProductTag[];
}
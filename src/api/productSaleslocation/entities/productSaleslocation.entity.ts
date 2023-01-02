import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductSaleslocation {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    address: string

    @Column()
    addressDetail: string

    @Column()
    lat: number

    @Column()
    lan: number

    @Column()
    meetingTime: Date
}
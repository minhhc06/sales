import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    price: number;

    @Column({ nullable: false, default:1 })
    id_category: number;

    @Column({ nullable: false, default:'' })
    image_name: string;

}
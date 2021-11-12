import { IsNotEmpty } from "class-validator";

export class ProductsDto{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    id_category: number;

    @IsNotEmpty()
    image_name: string;

}
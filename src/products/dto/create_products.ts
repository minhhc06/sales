import { IsNotEmpty } from "class-validator";

export class CreateProduct{
    id: string;
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    content: string;
    
}
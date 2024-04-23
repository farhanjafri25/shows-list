import { IsNotEmpty, IsString } from "class-validator";

export class SaveListDto {
    @IsNotEmpty()
    @IsString()
    contentId: string;

    @IsNotEmpty()
    @IsString()
    contentType: string;
}
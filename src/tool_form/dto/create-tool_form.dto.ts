import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateToolFormDto {
    @ApiProperty()
    @IsNumber()
    userId: number

    @ApiProperty()
    @IsString()
    description: string

}

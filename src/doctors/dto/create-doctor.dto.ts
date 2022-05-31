import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateDoctorDto {
    @ApiProperty()
    @IsString()
    grade?: string = '2022'
    @ApiProperty()
    @IsString()
    code?: string = 'mycode'
    @ApiProperty()
    @IsNumber()
    userId: number;

}

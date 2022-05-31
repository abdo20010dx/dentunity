import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";


export class CreatePatientFormDto {
    @ApiProperty()
    @IsNumber()
    userId: number

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsBoolean()
    Q1: boolean

    @ApiProperty()
    @IsBoolean()
    Q2: boolean

    @ApiProperty()
    @IsBoolean()
    Q3: boolean

    @ApiProperty()
    @IsBoolean()
    Q4: boolean

    @ApiProperty()
    @IsBoolean()
    Q5: boolean

}


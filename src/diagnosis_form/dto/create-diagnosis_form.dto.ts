
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateDiagnosisFormDto {
    @ApiProperty()
    @IsNumber()
    userId: number

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNumber()
    patientFormId: number


}

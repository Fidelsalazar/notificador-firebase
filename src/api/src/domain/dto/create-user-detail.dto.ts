import { IsString, IsOptional } from 'class-validator';

export class CreateUserDetailDto {
    @IsString()
    userId: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsString()
    @IsOptional()
    additionalInfo?: string;
}

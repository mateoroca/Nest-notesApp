import { IsString, IsEmail, IsOptional } from 'class-validator';

export class EditUserDto {
  @IsString()
  @IsOptional()
  firstName?: string;
  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail()
  @IsString()
  @IsOptional()
  email?: string;
}

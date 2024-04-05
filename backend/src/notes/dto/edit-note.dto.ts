import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditNoteDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  body?: string;

  @IsString()
  @IsOptional()
  category?: string;
}

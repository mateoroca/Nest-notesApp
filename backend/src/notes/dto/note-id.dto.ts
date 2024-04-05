import { IsNotEmpty, IsNumber } from 'class-validator';

export class NoteIdDto {
  @IsNotEmpty()
  @IsNumber()
  noteId: number;
}

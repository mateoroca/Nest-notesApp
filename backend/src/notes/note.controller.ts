import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { NoteService } from './note.service';
import { CreateNoteDto, EditNoteDto } from './dto';
import { IdDto } from './dto/id.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { NoteIdDto } from './dto/note-id.dto';

@UseGuards(JwtGuard)
@Controller('Note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post('create')
  create(@Body() dto: CreateNoteDto) {
    try {
      return this.noteService.createNote(dto);
    } catch (error) {
      throw new BadRequestException('Validation failed', error.message);
    }
  }

  @Patch('edit')
  editNoteById(@Body() dto: EditNoteDto) {
    try {
      return this.noteService.editNoteById(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete('delete')
  deleteNoteById(@Body() dto: IdDto) {
    try {
      return this.noteService.deleteNoteById(dto.id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('getall')
  getNotes(@Body() dto: IdDto) {
    try {
      return this.noteService.getUserNotes(dto.id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Patch('archive')
  archiveNote(@Body() dto: IdDto) {
    try {
      return this.noteService.archiveNote(dto.id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('getarchivednotes')
  getArchivedNotes(@Body() dto: IdDto) {
    try {
      return this.noteService.getUserArchivedNotes(dto.id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get('getcategories')
  getCategories() {
    try {
      return this.noteService.getAllCategories();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('createcategory')
  createCategory(@Body() dto: CreateCategoryDto) {
    try {
      return this.noteService.createNoteCategory(dto.name);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get('getnotesbycategory')
  getNotesByCategory(@Body() userId: IdDto, @Body() categoryId: IdDto) {
    try {
      return this.noteService.getNotesByCategory(userId.id, categoryId.id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('addcategorytonote')
  addCategoryToNote(@Body() noteId: NoteIdDto, @Body() categoryId: IdDto) {
    try {
      return this.noteService.addCategoryToNote(noteId.noteId, categoryId.id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

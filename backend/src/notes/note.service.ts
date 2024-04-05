import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateNoteDto, EditNoteDto } from './dto';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  createNote(dto: CreateNoteDto) {
    try {
      return this.prisma.note.create({
        data: {
          ...dto,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  editNoteById(dto: EditNoteDto) {
    try {
      const { id, ...rest } = dto;

      return this.prisma.note.update({
        where: {
          id: id,
        },
        data: {
          ...rest,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  deleteNoteById(NoteId: number) {
    try {
      return this.prisma.note.delete({
        where: {
          id: NoteId,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getUserNotes(userId: number) {
    const notes = await this.prisma.note.findMany({
      where: { userId: userId },
    });

    if (!notes) {
      throw new BadRequestException(`User with ID ${userId} not found`);
    }

    return notes;
  }
  archiveNote(noteId: number) {
    try {
      return this.prisma.note.update({
        where: {
          id: noteId,
        },
        data: {
          Archived: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getUserArchivedNotes(userId: number) {
    const notes = await this.prisma.note.findMany({
      where: { userId: userId },
    });

    if (!notes) {
      throw new BadRequestException(`User with ID ${userId} not found`);
    }
    const archivedNotes = notes.filter((note) => note.Archived);

    return archivedNotes;
  }

  createNoteCategory(categoryName: string) {
    try {
      return this.prisma.category.create({
        data: {
          name: categoryName,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  getAllCategories() {
    try {
      return this.prisma.category.findMany();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getNotesByCategory(userId: number, categoryId: number) {
    try {
      const userNotes = await this.prisma.note.findMany({
        where: { userId: userId },
      });

      if (!userNotes || userNotes.length === 0) {
        throw new BadRequestException(
          `User with ID ${userId} not found or has no notes`,
        );
      }

      const getNotesByCategory = await this.prisma.categoryNote.findMany({
        where: {
          categoryId: categoryId,
          noteId: {
            in: userNotes.map((note) => note.id),
          },
        },
        include: {
          note: true,
        },
      });
      return getNotesByCategory;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  addCategoryToNote(noteid: number, categoryid: number) {
    try {
      return this.prisma.categoryNote.create({
        data: {
          noteId: noteid,
          categoryId: categoryid,
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

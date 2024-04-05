import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateNoteDto, EditNoteDto } from './dto';
export declare class NoteService {
    private prisma;
    constructor(prisma: PrismaService);
    createNote(dto: CreateNoteDto): Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    editNoteById(dto: EditNoteDto): Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    deleteNoteById(NoteId: number): Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getUserNotes(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }[]>;
    archiveNote(noteId: number): Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getUserArchivedNotes(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }[]>;
    createNoteCategory(categoryName: string): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getAllCategories(): Prisma.PrismaPromise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getNotesByCategory(userId: number, categoryId: number): Promise<({
        note: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            body: string;
            Archived: boolean;
            userId: number;
        };
    } & {
        noteId: number;
        categoryId: number;
    })[]>;
    addCategoryToNote(noteid: number, categoryid: number): Prisma.Prisma__CategoryNoteClient<{
        noteId: number;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

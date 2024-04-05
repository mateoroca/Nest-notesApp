import { NoteService } from './note.service';
import { CreateNoteDto, EditNoteDto } from './dto';
import { IdDto } from './dto/id.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { NoteIdDto } from './dto/note-id.dto';
export declare class NoteController {
    private noteService;
    constructor(noteService: NoteService);
    create(dto: CreateNoteDto): import(".prisma/client").Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    editNoteById(dto: EditNoteDto): import(".prisma/client").Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    deleteNoteById(dto: IdDto): import(".prisma/client").Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getNotes(dto: IdDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }[]>;
    archiveNote(dto: IdDto): import(".prisma/client").Prisma.Prisma__NoteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getArchivedNotes(dto: IdDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        Archived: boolean;
        userId: number;
    }[]>;
    getCategories(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createCategory(dto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getNotesByCategory(userId: IdDto, categoryId: IdDto): Promise<({
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
    addCategoryToNote(noteId: NoteIdDto, categoryId: IdDto): import(".prisma/client").Prisma.Prisma__CategoryNoteClient<{
        noteId: number;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

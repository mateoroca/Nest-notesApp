"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NoteService = class NoteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    createNote(dto) {
        try {
            return this.prisma.note.create({
                data: {
                    ...dto,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    editNoteById(dto) {
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    deleteNoteById(NoteId) {
        try {
            return this.prisma.note.delete({
                where: {
                    id: NoteId,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getUserNotes(userId) {
        const notes = await this.prisma.note.findMany({
            where: { userId: userId },
        });
        if (!notes) {
            throw new common_1.BadRequestException(`User with ID ${userId} not found`);
        }
        return notes;
    }
    archiveNote(noteId) {
        try {
            return this.prisma.note.update({
                where: {
                    id: noteId,
                },
                data: {
                    Archived: true,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getUserArchivedNotes(userId) {
        const notes = await this.prisma.note.findMany({
            where: { userId: userId },
        });
        if (!notes) {
            throw new common_1.BadRequestException(`User with ID ${userId} not found`);
        }
        const archivedNotes = notes.filter((note) => note.Archived);
        return archivedNotes;
    }
    createNoteCategory(categoryName) {
        try {
            return this.prisma.category.create({
                data: {
                    name: categoryName,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    getAllCategories() {
        try {
            return this.prisma.category.findMany();
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getNotesByCategory(userId, categoryId) {
        try {
            const userNotes = await this.prisma.note.findMany({
                where: { userId: userId },
            });
            if (!userNotes || userNotes.length === 0) {
                throw new common_1.BadRequestException(`User with ID ${userId} not found or has no notes`);
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    addCategoryToNote(noteid, categoryid) {
        try {
            return this.prisma.categoryNote.create({
                data: {
                    noteId: noteid,
                    categoryId: categoryid,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NoteService);
//# sourceMappingURL=note.service.js.map
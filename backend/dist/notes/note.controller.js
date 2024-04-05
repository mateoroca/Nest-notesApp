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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const guard_1 = require("../auth/guard");
const note_service_1 = require("./note.service");
const dto_1 = require("./dto");
const id_dto_1 = require("./dto/id.dto");
const create_category_dto_1 = require("./dto/create-category.dto");
const note_id_dto_1 = require("./dto/note-id.dto");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    create(dto) {
        try {
            return this.noteService.createNote(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException('Validation failed', error.message);
        }
    }
    editNoteById(dto) {
        try {
            return this.noteService.editNoteById(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    deleteNoteById(dto) {
        try {
            return this.noteService.deleteNoteById(dto.id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    getNotes(dto) {
        try {
            return this.noteService.getUserNotes(dto.id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    archiveNote(dto) {
        try {
            return this.noteService.archiveNote(dto.id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    getArchivedNotes(dto) {
        try {
            return this.noteService.getUserArchivedNotes(dto.id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    getCategories() {
        try {
            return this.noteService.getAllCategories();
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    createCategory(dto) {
        try {
            return this.noteService.createNoteCategory(dto.name);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    getNotesByCategory(userId, categoryId) {
        try {
            return this.noteService.getNotesByCategory(userId.id, categoryId.id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    addCategoryToNote(noteId, categoryId) {
        try {
            return this.noteService.addCategoryToNote(noteId.noteId, categoryId.id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.NoteController = NoteController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateNoteDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EditNoteDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "editNoteById", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "deleteNoteById", null);
__decorate([
    (0, common_1.Post)('getall'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getNotes", null);
__decorate([
    (0, common_1.Patch)('archive'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "archiveNote", null);
__decorate([
    (0, common_1.Post)('getarchivednotes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getArchivedNotes", null);
__decorate([
    (0, common_1.Get)('getcategories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Post)('createcategory'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)('getnotesbycategory'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto, id_dto_1.IdDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getNotesByCategory", null);
__decorate([
    (0, common_1.Post)('addcategorytonote'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_id_dto_1.NoteIdDto, id_dto_1.IdDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "addCategoryToNote", null);
exports.NoteController = NoteController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('Note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
//# sourceMappingURL=note.controller.js.map
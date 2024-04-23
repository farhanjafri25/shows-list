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
exports.ListController = void 0;
const common_1 = require("@nestjs/common");
const app_interceptor_1 = require("../../app.interceptor");
const decorators_1 = require("../../decorators");
const saveList_dto_1 = require("../../dto/saveList.dto");
const list_service_1 = require("../services/list.service");
let ListController = class ListController {
    constructor(listService) {
        this.listService = listService;
    }
    async getUserList(userId, queryParams) {
        return await this.listService.fetchUserLists(userId, queryParams.page, queryParams.pageSize);
    }
    async saveUserContent(userId, body) {
        return await this.listService.saveUserList(body.contentId, userId, body.contentType);
    }
    async deleteUserContent(userId, contentId) {
        return await this.listService.removeContentFromUsersList(contentId, userId);
    }
};
exports.ListController = ListController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, decorators_1.GetCurrentUser)("userId")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ListController.prototype, "getUserList", null);
__decorate([
    (0, common_1.Post)("/save"),
    __param(0, (0, decorators_1.GetCurrentUser)("userId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, saveList_dto_1.SaveListDto]),
    __metadata("design:returntype", Promise)
], ListController.prototype, "saveUserContent", null);
__decorate([
    (0, common_1.Delete)("/:contentId"),
    __param(0, (0, decorators_1.GetCurrentUser)("userId")),
    __param(1, (0, common_1.Param)("contentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ListController.prototype, "deleteUserContent", null);
exports.ListController = ListController = __decorate([
    (0, common_1.UseInterceptors)(app_interceptor_1.AppInterceptor),
    (0, common_1.Controller)('/list'),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListController);
//# sourceMappingURL=list.controller.js.map
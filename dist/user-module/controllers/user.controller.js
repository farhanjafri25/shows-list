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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../../dto/user.dto");
const user_service_1 = require("../services/user.service");
const uuid_1 = require("uuid");
const app_interceptor_1 = require("../../app.interceptor");
const decorators_1 = require("../../decorators");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUser(body) {
        if (!body.email || !body.password || !body.confirmPassword) {
            throw new common_1.BadRequestException('All fields are required');
        }
        if (body.password !== body.confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const saveUser = await this.userService.saveUser({ ...body, userId: (0, uuid_1.v4)() });
        return saveUser;
    }
    async loginUser(body) {
        if (!body.email || !body.password) {
            throw new common_1.BadRequestException('All fields are required');
        }
        const loginUser = await this.userService.loginUser(body);
        return loginUser;
    }
};
exports.UserController = UserController;
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUser", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.UseInterceptors)(app_interceptor_1.AppInterceptor),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map
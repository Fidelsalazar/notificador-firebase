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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const register_use_case_1 = require("../../application/use-cases/user/register.use-case");
const create_user_dto_1 = require("../../domain/dto/create-user.dto");
const get_users_use_case_1 = require("../../application/use-cases/user/get-users.use-case");
const add_user_detail_use_case_1 = require("../../application/use-cases/user/add-user-detail.use-case");
const firebase_auth_service_1 = require("../services/firebase-auth.service");
const create_user_detail_dto_1 = require("../../domain/dto/create-user-detail.dto");
const login_use_case_1 = require("../../application/use-cases/user/login.use-case");
let AuthController = class AuthController {
    constructor(registerUserUseCase, getUsersUseCase, addUserDetailUseCase, firebaseAuthService, loginUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
        this.getUsersUseCase = getUsersUseCase;
        this.addUserDetailUseCase = addUserDetailUseCase;
        this.firebaseAuthService = firebaseAuthService;
        this.loginUserUseCase = loginUserUseCase;
    }
    async register(createUserDto) {
        return await this.registerUserUseCase.execute(createUserDto);
    }
    async login(email, password) {
        try {
            return await this.loginUserUseCase.execute(email, password);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getUsers() {
        return await this.getUsersUseCase.execute();
    }
    async addUserDetails(createUserDetailDto) {
        await this.addUserDetailUseCase.execute(createUserDetailDto.userId, createUserDetailDto);
    }
    async getUserDetails(userId) {
        return await this.firebaseAuthService.getUserDetails(userId);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('users/details'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_detail_dto_1.CreateUserDetailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addUserDetails", null);
__decorate([
    (0, common_1.Get)('users/details/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUserDetails", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [register_use_case_1.RegisterUserUseCase,
        get_users_use_case_1.GetUsersUseCase,
        add_user_detail_use_case_1.AddUserDetailUseCase,
        firebase_auth_service_1.FirebaseAuthService,
        login_use_case_1.LoginUserUseCase])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
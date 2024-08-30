"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const login_use_case_1 = require("../../application/use-cases/user/login.use-case");
const firebase_auth_service_1 = require("../../infrastructure/services/firebase-auth.service");
const register_use_case_1 = require("../../application/use-cases/user/register.use-case");
const get_users_use_case_1 = require("../../application/use-cases/user/get-users.use-case");
const add_user_detail_use_case_1 = require("../../application/use-cases/user/add-user-detail.use-case");
const auth_controller_1 = require("../../infrastructure/controllers/auth.controller");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            auth_controller_1.AuthController,
        ],
        providers: [
            login_use_case_1.LoginUserUseCase,
            register_use_case_1.RegisterUserUseCase,
            get_users_use_case_1.GetUsersUseCase,
            add_user_detail_use_case_1.AddUserDetailUseCase,
            firebase_auth_service_1.FirebaseAuthService
        ],
        exports: [
            register_use_case_1.RegisterUserUseCase,
            get_users_use_case_1.GetUsersUseCase,
            add_user_detail_use_case_1.AddUserDetailUseCase,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
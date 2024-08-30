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
exports.GetUsersUseCase = void 0;
const common_1 = require("@nestjs/common");
const firebase_auth_service_1 = require("../../../infrastructure/services/firebase-auth.service");
let GetUsersUseCase = class GetUsersUseCase {
    constructor(firebaseAuthService) {
        this.firebaseAuthService = firebaseAuthService;
    }
    async execute() {
        return await this.firebaseAuthService.getUsers();
    }
};
exports.GetUsersUseCase = GetUsersUseCase;
exports.GetUsersUseCase = GetUsersUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firebase_auth_service_1.FirebaseAuthService])
], GetUsersUseCase);
//# sourceMappingURL=get-users.use-case.js.map
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
exports.FirebaseAuthService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let FirebaseAuthService = class FirebaseAuthService {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert('src/config/firebase-service-account.json'),
        });
        this.db = admin.firestore();
    }
    async register(user) {
        const { email, password, displayName } = user;
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName,
        });
        await this.db.collection('todos').doc(userRecord.uid).set({
            tasks: [],
        });
        return userRecord.uid;
    }
    async login(email, password) {
        const token = await admin.auth().createCustomToken(email);
        return token;
    }
    async getUsers() {
        const usersSnapshot = await this.db.collection('users').get();
        return usersSnapshot.docs.map(doc => doc.data());
    }
    async addUserDetails(userId, userDetails) {
        await this.db.collection('userDetails').doc(userId).set(userDetails);
    }
    async getUserDetails(userId) {
        const userDetailSnapshot = await this.db.collection('userDetails').doc(userId).get();
        if (!userDetailSnapshot.exists) {
            throw new Error('User details not found');
        }
        return userDetailSnapshot.data();
    }
};
exports.FirebaseAuthService = FirebaseAuthService;
exports.FirebaseAuthService = FirebaseAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseAuthService);
//# sourceMappingURL=firebase-auth.service.js.map
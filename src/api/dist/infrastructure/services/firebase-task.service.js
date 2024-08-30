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
var FirebaseTaskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseTaskService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let FirebaseTaskService = FirebaseTaskService_1 = class FirebaseTaskService {
    constructor() {
        this.logger = new common_1.Logger(FirebaseTaskService_1.name);
        if (admin.apps.length === 0) {
            admin.initializeApp({
                credential: admin.credential.cert('src/config/firebase-service-account.json'),
            });
        }
        this.db = admin.firestore();
    }
    async createTask(userId, task) {
        const userDocRef = this.db.collection('todos').doc(userId);
        try {
            await userDocRef.update({
                tasks: admin.firestore.FieldValue.arrayUnion(task),
            });
        }
        catch (error) {
            this.logger.error(`Error creating task for user ${userId}: ${error.message}`);
            throw new Error('Failed to create task');
        }
    }
    async getTasks(userId) {
        try {
            const userTasksSnapshot = await this.db.collection('todos').doc(userId).get();
            if (!userTasksSnapshot.exists) {
                this.logger.warn(`No tasks found for user ${userId}`);
                return [];
            }
            const tasksData = userTasksSnapshot.data();
            return tasksData?.tasks || [];
        }
        catch (error) {
            this.logger.error(`Error retrieving tasks for user ${userId}: ${error.message}`);
            throw new Error('Failed to get tasks');
        }
    }
    async updateTask(userId, taskId, updatedTask) {
        const userDocRef = this.db.collection('todos').doc(userId);
        try {
            const userTasksSnapshot = await userDocRef.get();
            if (!userTasksSnapshot.exists) {
                this.logger.warn(`No tasks found for user ${userId}`);
                throw new Error('No tasks found for this user');
            }
            const tasks = userTasksSnapshot.data()?.tasks || [];
            const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, ...updatedTask, updatedAt: new Date() } : task);
            await userDocRef.update({
                tasks: updatedTasks,
            });
        }
        catch (error) {
            this.logger.error(`Error updating task ${taskId} for user ${userId}: ${error.message}`);
            throw new Error('Failed to update task');
        }
    }
    async deleteTask(userId, taskId) {
        const userDocRef = this.db.collection('todos').doc(userId);
        try {
            const userTasksSnapshot = await userDocRef.get();
            if (!userTasksSnapshot.exists) {
                this.logger.warn(`No tasks found for user ${userId}`);
                throw new Error('No tasks found for this user');
            }
            const tasks = userTasksSnapshot.data()?.tasks || [];
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            await userDocRef.update({
                tasks: updatedTasks,
            });
        }
        catch (error) {
            this.logger.error(`Error deleting task ${taskId} for user ${userId}: ${error.message}`);
            throw new Error('Failed to delete task');
        }
    }
};
exports.FirebaseTaskService = FirebaseTaskService;
exports.FirebaseTaskService = FirebaseTaskService = FirebaseTaskService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseTaskService);
//# sourceMappingURL=firebase-task.service.js.map
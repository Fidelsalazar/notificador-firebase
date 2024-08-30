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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const create_task_use_case_1 = require("../../application/use-cases/task/create-task.use-case");
const get_tasks_use_case_1 = require("../../application/use-cases/task/get-tasks.use-case");
const update_tasks_use_case_1 = require("../../application/use-cases/task/update-tasks.use-case");
const delete_task_use_case_1 = require("../../application/use-cases/task/delete-task.use-case");
let TaskController = class TaskController {
    constructor(createTaskUseCase, getTasksUseCase, updateTaskUseCase, deleteTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
        this.getTasksUseCase = getTasksUseCase;
        this.updateTaskUseCase = updateTaskUseCase;
        this.deleteTaskUseCase = deleteTaskUseCase;
    }
    async addTask(userId, task) {
        await this.createTaskUseCase.execute(userId, task);
    }
    async getUserTasks(userId) {
        return await this.getTasksUseCase.execute(userId);
    }
    async updateTask(userId, taskId, updatedTask) {
        await this.updateTaskUseCase.execute(userId, taskId, updatedTask);
    }
    async deleteTask(userId, taskId) {
        await this.deleteTaskUseCase.execute(userId, taskId);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)('users/:userId/tasks'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)('users/:userId/tasks'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getUserTasks", null);
__decorate([
    (0, common_1.Put)('users/:userId/tasks/:taskId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('taskId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)('users/:userId/tasks/:taskId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [create_task_use_case_1.CreateTaskUseCase,
        get_tasks_use_case_1.GetTasksUseCase,
        update_tasks_use_case_1.UpdateTaskUseCase,
        delete_task_use_case_1.DeleteTaskUseCase])
], TaskController);
//# sourceMappingURL=task.controller.js.map
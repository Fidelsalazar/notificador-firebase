import { Injectable } from '@nestjs/common';
import { Task } from '../../../domain/models/task.model';
import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';

@Injectable()
export class UpdateTaskUseCase {
    constructor(
        private readonly firebaseTaskService: FirebaseTaskService
    ) {}

    async execute(userId: string, taskId: string, updatedTask: Partial<Task>): Promise<void> {
        await this.firebaseTaskService.updateTask(userId, taskId, updatedTask);
    }
}
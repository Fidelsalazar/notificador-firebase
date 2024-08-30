import { Injectable } from '@nestjs/common';
import { Task } from 'src/domain/models/task.model';
import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';

@Injectable()
export class CreateTaskUseCase {
    constructor(
        private readonly firebaseTaskService: FirebaseTaskService
    ) {}

    async execute(userId: string, task: Task): Promise<void> {
        await this.firebaseTaskService.createTask(userId, task);
    }
}

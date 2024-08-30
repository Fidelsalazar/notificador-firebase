import { Injectable } from '@nestjs/common';
import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';

@Injectable()
export class DeleteTaskUseCase {
    constructor(
        private readonly firebaseTaskService: FirebaseTaskService
    ) {}

    async execute(userId: string, taskId: string): Promise<void> {
        await this.firebaseTaskService.deleteTask(userId, taskId);
    }
}

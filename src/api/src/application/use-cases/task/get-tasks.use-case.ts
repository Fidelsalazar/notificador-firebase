import { Injectable } from '@nestjs/common';
import { Task } from '../../../domain/models/task.model';
import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';

@Injectable()
export class GetTasksUseCase {
    constructor(
        private readonly firebaseTaskService: FirebaseTaskService
    ) {}

    async execute(userId: string): Promise<Task[]> {
        return await this.firebaseTaskService.getTasks(userId);
    }
}

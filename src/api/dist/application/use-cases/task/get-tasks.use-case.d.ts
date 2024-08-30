import { Task } from '../../../domain/models/task.model';
import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';
export declare class GetTasksUseCase {
    private readonly firebaseTaskService;
    constructor(firebaseTaskService: FirebaseTaskService);
    execute(userId: string): Promise<Task[]>;
}

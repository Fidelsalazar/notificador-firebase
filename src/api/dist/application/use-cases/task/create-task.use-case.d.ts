import { Task } from 'src/domain/models/task.model';
import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';
export declare class CreateTaskUseCase {
    private readonly firebaseTaskService;
    constructor(firebaseTaskService: FirebaseTaskService);
    execute(userId: string, task: Task): Promise<void>;
}

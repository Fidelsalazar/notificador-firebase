import { FirebaseTaskService } from 'src/infrastructure/services/firebase-task.service';
export declare class DeleteTaskUseCase {
    private readonly firebaseTaskService;
    constructor(firebaseTaskService: FirebaseTaskService);
    execute(userId: string, taskId: string): Promise<void>;
}

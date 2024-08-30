import { Task } from '../../domain/models/task.model';
import { CreateTaskUseCase } from 'src/application/use-cases/task/create-task.use-case';
import { GetTasksUseCase } from 'src/application/use-cases/task/get-tasks.use-case';
import { UpdateTaskUseCase } from 'src/application/use-cases/task/update-tasks.use-case';
import { DeleteTaskUseCase } from 'src/application/use-cases/task/delete-task.use-case';
export declare class TaskController {
    private readonly createTaskUseCase;
    private readonly getTasksUseCase;
    private readonly updateTaskUseCase;
    private readonly deleteTaskUseCase;
    constructor(createTaskUseCase: CreateTaskUseCase, getTasksUseCase: GetTasksUseCase, updateTaskUseCase: UpdateTaskUseCase, deleteTaskUseCase: DeleteTaskUseCase);
    addTask(userId: string, task: Task): Promise<void>;
    getUserTasks(userId: string): Promise<Task[]>;
    updateTask(userId: string, taskId: string, updatedTask: Partial<Task>): Promise<void>;
    deleteTask(userId: string, taskId: string): Promise<void>;
}

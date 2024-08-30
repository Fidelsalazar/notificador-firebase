import { Task } from '../../domain/models/task.model';
export interface ITaskRepository {
    createTask(userId: string, task: Task): Promise<void>;
    getTasks(userId: string): Promise<Task[]>;
    updateTask(userId: string, taskId: string, updatedTask: Partial<Task>): Promise<void>;
    deleteTask(userId: string, taskId: string): Promise<void>;
}

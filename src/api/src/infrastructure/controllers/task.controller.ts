import { Body, Controller, Get, Param, Post, Put, Delete, NotFoundException } from '@nestjs/common';
import { Task } from '../../domain/models/task.model';
import { CreateTaskUseCase } from 'src/application/use-cases/task/create-task.use-case';
import { GetTasksUseCase } from 'src/application/use-cases/task/get-tasks.use-case';
import { UpdateTaskUseCase } from 'src/application/use-cases/task/update-tasks.use-case';
import { DeleteTaskUseCase } from 'src/application/use-cases/task/delete-task.use-case';

@Controller('auth')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly getTasksUseCase: GetTasksUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
  ) {}

  @Post('users/:userId/tasks')
  async addTask(@Param('userId') userId: string, @Body() task: Task): Promise<void> {
    await this.createTaskUseCase.execute(userId, task);
  }

  @Get('users/:userId/tasks')
  async getUserTasks(@Param('userId') userId: string): Promise<Task[]> {
    return await this.getTasksUseCase.execute(userId);
  }

  @Put('users/:userId/tasks/:taskId')
  async updateTask(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
    @Body() updatedTask: Partial<Task>
  ): Promise<void> {
    await this.updateTaskUseCase.execute(userId, taskId, updatedTask);
  }

  @Delete('users/:userId/tasks/:taskId')
  async deleteTask(@Param('userId') userId: string, @Param('taskId') taskId: string): Promise<void> {
    await this.deleteTaskUseCase.execute(userId, taskId);
  }
}

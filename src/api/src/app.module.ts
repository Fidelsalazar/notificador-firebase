import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { RegisterUserUseCase } from './application/use-cases/user/register.use-case';
import { FirebaseAuthService } from './infrastructure/services/firebase-auth.service';
import { GetUsersUseCase } from './application/use-cases/user/get-users.use-case';
import { AddUserDetailUseCase } from './application/use-cases/user/add-user-detail.use-case';
import { CreateTaskUseCase } from './application/use-cases/task/create-task.use-case';
import { GetTasksUseCase } from './application/use-cases/task/get-tasks.use-case';
import { UpdateTaskUseCase } from './application/use-cases/task/update-tasks.use-case';
import { DeleteTaskUseCase } from './application/use-cases/task/delete-task.use-case';
import { FirebaseTaskService } from './infrastructure/services/firebase-task.service';
import { TaskController } from './infrastructure/controllers/task.controller';
import { AuthModule } from './domain/modules/auth.module';

@Module({
  imports: [
    AuthModule
  ],
  controllers: [
    //AuthController,
    //TaskController,
  ],
  providers: [
    //RegisterUserUseCase, 
    //GetUsersUseCase, 
    //AddUserDetailUseCase,
    //CreateTaskUseCase,
    //GetTasksUseCase,
    //UpdateTaskUseCase,
    //DeleteTaskUseCase,
    //FirebaseAuthService,
    //FirebaseTaskService
  ],
})
export class AppModule {}


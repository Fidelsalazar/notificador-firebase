import { Module } from '@nestjs/common';
import { LoginUserUseCase } from '../../application/use-cases/user/login.use-case';
import { FirebaseAuthService } from '../../infrastructure/services/firebase-auth.service';
import { RegisterUserUseCase } from 'src/application/use-cases/user/register.use-case';
import { GetUsersUseCase } from 'src/application/use-cases/user/get-users.use-case';
import { AddUserDetailUseCase } from 'src/application/use-cases/user/add-user-detail.use-case';
import { AuthController } from 'src/infrastructure/controllers/auth.controller';

@Module({
    controllers: [
        AuthController,
    ],
    providers: [
        LoginUserUseCase,
        RegisterUserUseCase, 
        GetUsersUseCase, 
        AddUserDetailUseCase,
        /*{
            provide: 'AuthRepositoryInterface',
            useClass: FirebaseAuthService,
        },*/
        FirebaseAuthService
    ],
    exports: [
        //LoginUserUseCase,
        RegisterUserUseCase, 
        GetUsersUseCase, 
        AddUserDetailUseCase,
    ],
})
export class AuthModule {}
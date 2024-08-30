import { RegisterUserUseCase } from '../../application/use-cases/user/register.use-case';
import { CreateUserDto } from 'src/domain/dto/create-user.dto';
import { GetUsersUseCase } from 'src/application/use-cases/user/get-users.use-case';
import { AddUserDetailUseCase } from 'src/application/use-cases/user/add-user-detail.use-case';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { CreateUserDetailDto } from 'src/domain/dto/create-user-detail.dto';
import { LoginUserUseCase } from 'src/application/use-cases/user/login.use-case';
export declare class AuthController {
    private readonly registerUserUseCase;
    private readonly getUsersUseCase;
    private readonly addUserDetailUseCase;
    private readonly firebaseAuthService;
    private readonly loginUserUseCase;
    constructor(registerUserUseCase: RegisterUserUseCase, getUsersUseCase: GetUsersUseCase, addUserDetailUseCase: AddUserDetailUseCase, firebaseAuthService: FirebaseAuthService, loginUserUseCase: LoginUserUseCase);
    register(createUserDto: CreateUserDto): Promise<string>;
    login(email: string, password: string): Promise<string>;
    getUsers(): Promise<any[]>;
    addUserDetails(createUserDetailDto: CreateUserDetailDto): Promise<void>;
    getUserDetails(userId: string): Promise<any>;
}

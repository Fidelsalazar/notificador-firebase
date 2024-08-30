import { 
  Controller, 
  Post, 
  Body, 
  UsePipes, 
  ValidationPipe, 
  Get, 
  Param, 
  HttpException, 
  HttpStatus 
} from '@nestjs/common';
import { RegisterUserUseCase } from '../../application/use-cases/user/register.use-case'
import { CreateUserDto } from 'src/domain/dto/create-user.dto';
import { GetUsersUseCase } from 'src/application/use-cases/user/get-users.use-case';
import { AddUserDetailUseCase } from 'src/application/use-cases/user/add-user-detail.use-case';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { CreateUserDetailDto } from 'src/domain/dto/create-user-detail.dto';
import { LoginUserUseCase } from 'src/application/use-cases/user/login.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly addUserDetailUseCase: AddUserDetailUseCase,
    private readonly firebaseAuthService: FirebaseAuthService,
    private readonly loginUserUseCase: LoginUserUseCase
  ) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async register(@Body() createUserDto: CreateUserDto): Promise<string> {
    return await this.registerUserUseCase.execute(createUserDto);
  }

  @Post('login')
  async login(
    @Body('email') email: string, 
    @Body('password') password: string
  ): Promise<string> {
    try {
      return await this.loginUserUseCase.execute(email, password);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('users')
  async getUsers(): Promise<any[]> {
    return await this.getUsersUseCase.execute();
  }

  @Post('users/details')
  @UsePipes(new ValidationPipe({ transform: true }))
  async addUserDetails(@Body() createUserDetailDto: CreateUserDetailDto): Promise<void> {
    await this.addUserDetailUseCase.execute(createUserDetailDto.userId, createUserDetailDto);
  }

  // Método para obtener detalles del usuario
  @Get('users/details/:userId')
  async getUserDetails(@Param('userId') userId: string): Promise<any> {
    return await this.firebaseAuthService.getUserDetails(userId);
  }
}

import { Injectable } from '@nestjs/common';
import { IAuthRepository } from 'src/infrastructure/repositories/auth.repository.interface';
import { FirebaseAuthService } from 'src/infrastructure/services/firebase-auth.service';

@Injectable()
export class LoginUserUseCase {
    constructor(
        private readonly firebaseAuthService: FirebaseAuthService,
        //private readonly authRepositiory: IAuthRepository
    ) {}

    async execute(email: string, password: string): Promise<string> {
        return await this.firebaseAuthService.login(email, password);
    }
}
import { Injectable } from '@nestjs/common';
import { FirebaseAuthService } from '../../../infrastructure/services/firebase-auth.service';
import { User } from '../../../domain/models/user.model';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  async execute(user: User): Promise<string> {
    return await this.firebaseAuthService.register(user);
  }
}

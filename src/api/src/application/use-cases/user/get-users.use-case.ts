import { Injectable } from '@nestjs/common';
import { FirebaseAuthService } from '../../../infrastructure/services/firebase-auth.service';
import { User } from '../../../domain/models/user.model';

@Injectable()
export class GetUsersUseCase {
    constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

    async execute(): Promise<User[]> {
        return await this.firebaseAuthService.getUsers();
    }
}

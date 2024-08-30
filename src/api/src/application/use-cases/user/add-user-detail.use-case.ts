import { Injectable } from '@nestjs/common';
import { FirebaseAuthService } from '../../../infrastructure/services/firebase-auth.service';

@Injectable()
export class AddUserDetailUseCase {
    constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

    async execute(userId: string, userDetails: any): Promise<void> {
        await this.firebaseAuthService.addUserDetails(userId, userDetails);
    }
}

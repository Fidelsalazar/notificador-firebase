import { FirebaseAuthService } from '../../../infrastructure/services/firebase-auth.service';
export declare class AddUserDetailUseCase {
    private readonly firebaseAuthService;
    constructor(firebaseAuthService: FirebaseAuthService);
    execute(userId: string, userDetails: any): Promise<void>;
}

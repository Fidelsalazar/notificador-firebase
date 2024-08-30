import { FirebaseAuthService } from '../../../infrastructure/services/firebase-auth.service';
import { User } from '../../../domain/models/user.model';
export declare class GetUsersUseCase {
    private readonly firebaseAuthService;
    constructor(firebaseAuthService: FirebaseAuthService);
    execute(): Promise<User[]>;
}

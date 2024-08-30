import { FirebaseAuthService } from 'src/infrastructure/services/firebase-auth.service';
export declare class LoginUserUseCase {
    private readonly firebaseAuthService;
    constructor(firebaseAuthService: FirebaseAuthService);
    execute(email: string, password: string): Promise<string>;
}

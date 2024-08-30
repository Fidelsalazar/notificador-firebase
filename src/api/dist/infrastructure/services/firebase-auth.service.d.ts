import { User } from '../../domain/models/user.model';
import { IAuthRepository } from '../repositories/auth.repository.interface';
export declare class FirebaseAuthService implements IAuthRepository {
    private db;
    constructor();
    register(user: User): Promise<string>;
    login(email: string, password: string): Promise<string>;
    getUsers(): Promise<User[]>;
    addUserDetails(userId: string, userDetails: any): Promise<void>;
    getUserDetails(userId: string): Promise<any>;
}

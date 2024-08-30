
import { User } from '../../domain/models/user.model';

export interface IAuthRepository {
    register(user: User): Promise<string>;
    login(email: string, password: string): Promise<string>;
}

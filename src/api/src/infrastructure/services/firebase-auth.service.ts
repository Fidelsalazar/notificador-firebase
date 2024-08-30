import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { User } from '../../domain/models/user.model';
import { IAuthRepository } from '../repositories/auth.repository.interface';

@Injectable()
export class FirebaseAuthService implements IAuthRepository{

  private db: FirebaseFirestore.Firestore;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert('src/config/firebase-service-account.json'),
    });

    this.db = admin.firestore();
  }
  
  async register(user: User): Promise<string> {
    const { email, password, displayName } = user;
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    // Crear un documento de tareas vacío para el usuario en Firestore
    await this.db.collection('todos').doc(userRecord.uid).set({
      tasks: [],
    });

    return userRecord.uid;
  }

  async login(email: string, password: string): Promise<string> {
    const token = await admin.auth().createCustomToken(email); // Por ejemplo, generar un token personalizado

    return token;
  }

  async getUsers(): Promise<User[]> {
    const usersSnapshot = await this.db.collection('users').get();
    return usersSnapshot.docs.map(doc => doc.data() as User);
  }

  async addUserDetails(userId: string, userDetails: any): Promise<void> {
    await this.db.collection('userDetails').doc(userId).set(userDetails);
  }

  // Método para obtener detalles del usuario
  async getUserDetails(userId: string): Promise<any> {
    const userDetailSnapshot = await this.db.collection('userDetails').doc(userId).get();
    if (!userDetailSnapshot.exists) {
      throw new Error('User details not found');
    }
    return userDetailSnapshot.data();
  }
}

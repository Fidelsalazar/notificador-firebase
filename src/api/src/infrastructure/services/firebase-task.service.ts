// src/infrastructure/services/firebase-task.service.ts

import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Task } from '../../domain/models/task.model';

@Injectable()
export class FirebaseTaskService {
  private readonly db: FirebaseFirestore.Firestore;
  private readonly logger = new Logger(FirebaseTaskService.name);

  constructor() {
    // Inicializar Firebase solo una vez
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert('src/config/firebase-service-account.json'),
      });
    }
    this.db = admin.firestore();
  }

  async createTask(userId: string, task: Task): Promise<void> {
    const userDocRef = this.db.collection('todos').doc(userId);
    
    try {
      await userDocRef.update({
        tasks: admin.firestore.FieldValue.arrayUnion(task),
      });
    } catch (error) {
      this.logger.error(`Error creating task for user ${userId}: ${error.message}`);
      throw new Error('Failed to create task');
    }
  }

  async getTasks(userId: string): Promise<Task[]> {
    try {
      const userTasksSnapshot = await this.db.collection('todos').doc(userId).get();
      if (!userTasksSnapshot.exists) {
        this.logger.warn(`No tasks found for user ${userId}`);
        return [];
      }
      const tasksData = userTasksSnapshot.data();
      return tasksData?.tasks || [];
    } catch (error) {
      this.logger.error(`Error retrieving tasks for user ${userId}: ${error.message}`);
      throw new Error('Failed to get tasks');
    }
  }

  async updateTask(userId: string, taskId: string, updatedTask: Partial<Task>): Promise<void> {
    const userDocRef = this.db.collection('todos').doc(userId);
    
    try {
      const userTasksSnapshot = await userDocRef.get();
      if (!userTasksSnapshot.exists) {
        this.logger.warn(`No tasks found for user ${userId}`);
        throw new Error('No tasks found for this user');
      }

      const tasks = userTasksSnapshot.data()?.tasks || [];
      const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, ...updatedTask, updatedAt: new Date() } : task);
      
      await userDocRef.update({
        tasks: updatedTasks,
      });
    } catch (error) {
      this.logger.error(`Error updating task ${taskId} for user ${userId}: ${error.message}`);
      throw new Error('Failed to update task');
    }
  }

  async deleteTask(userId: string, taskId: string): Promise<void> {
    const userDocRef = this.db.collection('todos').doc(userId);

    try {
      const userTasksSnapshot = await userDocRef.get();
      if (!userTasksSnapshot.exists) {
        this.logger.warn(`No tasks found for user ${userId}`);
        throw new Error('No tasks found for this user');
      }

      const tasks = userTasksSnapshot.data()?.tasks || [];
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      
      await userDocRef.update({
        tasks: updatedTasks,
      });
    } catch (error) {
      this.logger.error(`Error deleting task ${taskId} for user ${userId}: ${error.message}`);
      throw new Error('Failed to delete task');
    }
  }
}

import { Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginComponent } from './module/login/login.component';
import { EmployeeComponent } from './module/employee/employee.component';
import { MedalsComponent } from './module/medals/medals.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [ AuthGuard ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [ AuthGuard ]
  },
  {
    path: 'employer',
    component: EmployeeComponent,
  },
  {
    path:'medals',
    component: MedalsComponent,
  }
];


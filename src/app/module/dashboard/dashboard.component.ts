import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AuthService } from '../../services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { Customer } from '../../core/interface/customer.interface';
import { CustomerService } from '../../services/customer/customer.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [HttpClientModule, CommonModule, NavbarComponent, DropdownModule],
  providers: [AuthService, MessageService, CustomerService],
})
export class DashboardComponent {
  constructor(
    public authService: AuthService,
    private customerService: CustomerService,
    private messageService: MessageService
  ) {}
}

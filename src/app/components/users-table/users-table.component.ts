import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CrocoService } from '../../service/croco.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FooterComponent, FormsModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {

  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';

  httpClient = inject(HttpClient)
  router = inject(Router);

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private crocoService: CrocoService) {
  }

  getUsers(){
    this.crocoService.fetchUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.filteredUsers = response;
      }
    })
  }

  filterUsers() {
    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query)
    );
  }

  viewUserPosts(userId: number): void {
    this.router.navigate([`users/posts/${userId.toString()}`]);
  }

  ViewUserTodoList(userId: number): void {
    this.router.navigate([`todos/${userId.toString()}`]);
  }
 
}

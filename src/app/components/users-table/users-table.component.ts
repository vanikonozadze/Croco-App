import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FooterComponent],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {

  users: any;

  httpClient = inject(HttpClient)
  router = inject(Router);

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private crocoService: CrocoService) {
  }

  getUsers(){
    this.crocoService.fetchUsers().subscribe({
      next: (repsone) => {
        this.users = repsone;
      }
    })
  }

  viewUserPosts(userId: string): void {
    this.router.navigate([`users/posts/${userId.toString()}`]);
  }

}

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
    this.fetchUsers();
    this.fetchData();
  }

  constructor(private crocorService: CrocoService) {
  }

  fetchData(){
    this.crocorService.getData().subscribe({
      next: (repsone) => {
        console.log(repsone); 
      }
    })
  }

  fetchUsers(){
    this.httpClient
    .get("https://jsonplaceholder.typicode.com/users")
    .subscribe((data) => {
      this.users = data;
    })
  }

  viewUserPosts(userId: string): void {
    this.router.navigate([`users/posts/${userId.toString()}`]);
  }

}

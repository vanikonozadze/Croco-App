import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

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
    this.fetchUsers()
  }

  fetchUsers(){
    this.httpClient
    .get("https://jsonplaceholder.typicode.com/users")
    .subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
  }

  viewUserPosts(userId: string): void {
    // console.log(typeof userId.toString());
    this.router.navigate([`users/posts/${userId.toString()}`]);
  }

}

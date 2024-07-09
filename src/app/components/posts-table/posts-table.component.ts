import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FooterComponent],
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.css'
})
export class PostsTableComponent {

  posts: any;
  users: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.fetchUsers();
  }

  fetchPosts() {
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      });
  }

  fetchUsers() {
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  }

  getUserName(userId: number): string {
    if (this.users) {
      const user = this.users.find((user: any) => user.id === userId);
      return user ? user.name : '';
    }
    return '';
  }

}

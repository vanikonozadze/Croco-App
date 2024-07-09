import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { PostPopupComponent } from "../post-popup/post-popup.component";
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, PostPopupComponent],
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.css'
})
export class PostsTableComponent {

  posts: any;
  users: any;
  selectedPostData: any;

  constructor(public crocoService: CrocoService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.fetchUsers();
  }

  fetchPosts() {
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data) => {
        this.posts = data;
      });
  }

  fetchUsers() {
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => {
        this.users = data;
      });
  }

  getUserName(userId: number): string {
    if (this.users) {
      const user = this.users.find((user: any) => user.id === userId);
      return user ? user.name : '';
    }
    return '';
  }

  togglePopUpViewWithId(post: any) {
    this.crocoService.togglePopUp();
    this.selectedPostData = post;
  }

}

import { User } from './../../models/user.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { PostPopupComponent } from "../post-popup/post-popup.component";
import { CrocoService } from '../../service/croco.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, PostPopupComponent],
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.css'
})
export class PostsTableComponent {

  posts: Post[] = [];
  users: User[] = [];
  selectedPostData: any;

  constructor(public crocoService: CrocoService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  getPosts() {
      this.crocoService.fetchPosts().subscribe({
        next: (response) => {
          this.posts = response
        }
      })
  }

  getUsers(){
    this.crocoService.fetchUsers().subscribe({
      next: (repsone) => {
        this.users = repsone;
      }
    })
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

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CrocoService } from '../../service/croco.service';
import { PostPopupComponent } from "../post-popup/post-popup.component";
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FooterComponent, PostPopupComponent],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {

  userId: string | undefined;
  userPosts: Post[] = [];
  authorName: string | undefined;
  selectedPostData: Post[] = [];

  constructor(private route: ActivatedRoute, public crocoService: CrocoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')!;
      this.getUserPost(this.userId);
      this.fetchUserName(this.userId);
    });
  }

  getUserPost(userId: string): void {
      this.crocoService.fetchUserPosts(userId).subscribe({
        next: (response) => {
          this.userPosts = response;
        }
      })
  }

  fetchUserName(userId: string): void {
      this.crocoService.fetchUserName(userId).subscribe({
        next: (response) => {
          this.authorName = response.name
        }
      })
  }

  togglePopUpViewWithId(post: any) {
    this.crocoService.togglePopUp();
    this.selectedPostData = post;
  }

}

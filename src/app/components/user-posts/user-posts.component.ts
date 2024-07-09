import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FooterComponent],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {

  userId: string | undefined;
  userPosts: any;
  authorName: string | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private crocoService: CrocoService) { }

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

  thisLog(id: number){
    console.log(id)
  }

}

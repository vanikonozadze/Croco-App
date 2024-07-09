import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

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

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')!;
      this.fetchUserPosts(this.userId);
      this.fetchUserName(this.userId);
    });
  }

  fetchUserPosts(userId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .subscribe((posts: any) => {
        this.userPosts = posts;
      });
  }

  fetchUserName(userId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .subscribe((user: any) => {
        this.authorName = user.name;
      });
  }

  thisLog(id: number){
    console.log(id)
  }

}

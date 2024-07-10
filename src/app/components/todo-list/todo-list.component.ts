import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrocoService } from '../../service/croco.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  userId: string | undefined;
  userTodoList: any;
  authorName: string | undefined;
  selectedPostData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, public crocoService: CrocoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')!;
      this.getUserTodoList(this.userId);
      this.getUserName(this.userId);
    });
  }

  getUserTodoList(userId: string): void{
    this.crocoService.fetchUserTodoList(userId).subscribe({
      next: (response) => {
        this.userTodoList = response
        console.log(this.userTodoList); 
      }
    })
  }

  getUserName(userId: string): void{
    this.crocoService.fetchUserName(userId).subscribe({
      next: (response) => {
        this.authorName = response.name
      }
    })
  }

}

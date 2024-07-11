import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrocoService } from '../../service/croco.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  userId: string | undefined;
  userTodoList: Todo[] = [];
  authorName: string | undefined;

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

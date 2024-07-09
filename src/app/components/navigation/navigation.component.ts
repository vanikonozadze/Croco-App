import { Component, inject, OnInit } from '@angular/core';
import { CrocoService } from '../../service/croco.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {

  users: any;
  posts: any;

  httpClient = inject(HttpClient)

  constructor(private crocoService: CrocoService) {}
  
  ngOnInit(): void {
  }

  fetchUsers(){
    this.httpClient
    .get("https://jsonplaceholder.typicode.com/users")
    .subscribe((data) => {
      this.users = data;
    })
  }

  fetchPosts(){
    this.httpClient
    .get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data) => {
      this.posts = data;
    })
  }

  toggleMenuView() {
    this.crocoService.toggleMenu();
  }

  handleSidebarClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('button')) {
      event.stopPropagation();
    }
  }

}

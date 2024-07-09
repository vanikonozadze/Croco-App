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

  getUsers(){
    this.crocoService.fetchUsers().subscribe({
      next: (response) => {
        this.users = response
      }
    })
  }

  getPosts(){
    this.crocoService.fetchPosts().subscribe({
      next: (response) => {
        this.posts = response
      }
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

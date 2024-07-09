import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {

  users: any;

  httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.httpClient
    .get("https://jsonplaceholder.typicode.com/users")
    .subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
  }

}

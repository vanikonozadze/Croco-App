import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CrocoService {

  private baseApiUrl: string = "https://jsonplaceholder.typicode.com"
  public showMenu: boolean = false;
  public showPopUp: boolean = false;

  constructor(private http: HttpClient) {}

  fetchUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl + "/users");
  }

  fetchPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseApiUrl + "/posts");
  }

  fetchUserPosts(userId: string):Observable<Post[]>{
    return this.http.get<Post[]>(this.baseApiUrl + `/posts?userId=${userId}`)
  }

  fetchUserName(userId: string):Observable<User> {
    return this.http.get<User>(this.baseApiUrl + `/users/${userId}`)
  }

  fetchUserTodoList(userId: string): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + `/todos?userId=${userId}`)
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  togglePopUp(){
    this.showPopUp = !this.showPopUp;
  }

}

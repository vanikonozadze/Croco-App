import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrocoService {

  private baseApiUrl: string = "https://jsonplaceholder.typicode.com"
  public showMenu: boolean = false;
  public showPopUp: boolean = false;

  constructor(private http: HttpClient) {}

  fetchUsers():Observable<any>{
    return this.http.get<any>(this.baseApiUrl + "/users");
  }

  fetchPosts():Observable<any>{
    return this.http.get<any>(this.baseApiUrl + "/posts");
  }

  fetchUserPosts(userId: string):Observable<any>{
    return this.http.get(this.baseApiUrl + `/posts?userId=${userId}`)
  }

  fetchUserName(userId: string):Observable<any> {
    return this.http.get(this.baseApiUrl + `/users/${userId}`)
  }

  fetchUserTodoList(userId: string): Observable<any>{
    return this.http.get(this.baseApiUrl + `/todos?userId=${userId}`)
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  togglePopUp(){
    this.showPopUp = !this.showPopUp;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrocoService {

  public showMenu: boolean = false;
  public showPopUp: boolean = false;

  constructor(private http: HttpClient) {}

  fetchUsers():Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }

  fetchPosts():Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  fetchUserPosts(userId: string):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  }

  fetchUserName(userId: string):Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  togglePopUp(){
    this.showPopUp = !this.showPopUp;
  }

}

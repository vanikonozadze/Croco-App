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

  getData():Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  togglePopUp(){
    this.showPopUp = !this.showPopUp;
  }

}

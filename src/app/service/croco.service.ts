import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrocoService {

  public showMenu: boolean = false;

  constructor() { }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
}

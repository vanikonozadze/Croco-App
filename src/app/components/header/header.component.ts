import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date();

  ngOnInit(): void {
  
  }

  constructor(private crocoService: CrocoService) {
  }

  toggleMenuSection(){
    this.crocoService.toggleMenu();
    console.log(this.crocoService.showMenu);
  }

}

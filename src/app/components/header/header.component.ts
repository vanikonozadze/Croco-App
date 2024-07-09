import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currentDate: Date ;

  ngOnInit(): void {
  }

  constructor(private crocoService: CrocoService) {
    this.currentDate = new Date();
  }

  toggleMenuSection(){
    this.crocoService.toggleMenu();
  }

}

import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrocoService } from '../../service/croco.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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

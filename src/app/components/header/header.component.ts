import { Component, OnInit, NgZone  } from '@angular/core';
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
  currentDateTime: string;

  ngOnInit(): void {
  }

  constructor(private crocoService: CrocoService, private ngZone: NgZone) {
    this.currentDateTime = new Date().toLocaleString();
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.currentDateTime = new Date().toLocaleString();
        });
      }, 1000);
    }); 
  }

  toggleMenuSection(){
    this.crocoService.toggleMenu();
  }

}

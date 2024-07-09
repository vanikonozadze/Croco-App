import { Component } from '@angular/core';
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(private crocoService: CrocoService) {}

  toggleFavView() {
    this.crocoService.toggleMenu();
  }

  handleSidebarClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('button')) {
      event.stopPropagation();
    }
  }

}

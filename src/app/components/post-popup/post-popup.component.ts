import { Component, Input } from '@angular/core';
import { CrocoService } from '../../service/croco.service';

@Component({
  selector: 'app-post-popup',
  standalone: true,
  imports: [],
  templateUrl: './post-popup.component.html',
  styleUrl: './post-popup.component.css'
})
export class PostPopupComponent {

  @Input() postData: any;

  constructor(private crocoService: CrocoService) {}

  togglePopUpView() {
    this.crocoService.togglePopUp();
    console.log(this.postData)
  }

  handleSidebarClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('button')) {
      event.stopPropagation();
    }
  }

}

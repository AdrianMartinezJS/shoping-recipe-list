import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  profileOpen: boolean = false;

  openProfile() {
    this.profileOpen = !this.profileOpen;
  }
}

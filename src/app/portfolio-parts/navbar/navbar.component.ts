import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  selectedLanguage: string = 'de'; // Default language

  selectLanguage(lang: string) {
    this.selectedLanguage = lang; // Update the selected language
  }

}

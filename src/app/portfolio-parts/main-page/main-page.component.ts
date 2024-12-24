import { Component, inject } from '@angular/core';
import { HeaderComponent } from './navbar/navbar.component';
import { TextContentService } from './../../shared/text-content/text-content.service';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  text = inject(TextContentService)
}
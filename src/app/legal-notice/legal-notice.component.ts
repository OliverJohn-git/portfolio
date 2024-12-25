import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../portfolio-parts/main-page/navbar/navbar.component';
import { FooterComponent } from '../portfolio-parts/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  text = inject(TextContentService)
}
import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../portfolio-parts/main-page/navbar/navbar.component';
import { FooterComponent } from '../portfolio-parts/footer/footer.component';
@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  text = inject(TextContentService)

  constructor() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }
}
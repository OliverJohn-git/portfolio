import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ReferenceComponent } from "./reference/reference.component";

@Component({
  selector: 'app-main-page',
  imports: [ AboutMeComponent, SkillsComponent, ProjectsComponent, ContactMeComponent, FooterComponent, ReferenceComponent],
  templateUrl: './portfolio-parts.component.html',
  styleUrl: './portfolio-parts.component.scss'
})
export class PortfolioPartsComponent {

}
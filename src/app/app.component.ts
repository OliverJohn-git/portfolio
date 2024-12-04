import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReferenceComponent } from "./reference/reference.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ReferenceComponent, ContactMeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

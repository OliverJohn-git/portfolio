import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ElPolloLocoComponent } from "./projects/el-pollo-loco/el-pollo-loco.component";
import { JoinComponent } from "./projects/join/join.component";
import { ReferenceComponent } from "./reference/reference.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, JoinComponent, ElPolloLocoComponent, ReferenceComponent, ContactMeComponent, FooterComponent, MainPageComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

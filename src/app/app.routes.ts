import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./portfolio-parts/skill-set/skill-set.component";
import { ProjectsComponent } from "./projects/projects.component";
    import { ElPolloLocoComponent } from "./portfolio-parts/el-pollo-loco/el-pollo-loco.component";
    import { JoinComponent } from "./portfolio-parts/join/join.component";
import { ReferenceComponent } from "./portfolio-parts/reference/reference.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "./footer/footer.component";


export const routes: Routes = [
    { path: '', component:NavbarComponent},
    { path: '', component:MainPageComponent},
    { path: 'aboutMe', component:AboutMeComponent},
    { path: 'skills', component:SkillSetComponent},
    { path: 'projects', component:ProjectsComponent},
        { path: '', component:JoinComponent},
        { path: '', component:ElPolloLocoComponent},
    { path: '', component:ReferenceComponent},
    { path: 'contact', component:ContactMeComponent},
    { path: '', component:FooterComponent},
];
import { Component, inject } from '@angular/core';
import { TextContentService } from './../../shared/text-content/text-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.sass'
})
export class PortfolioComponent {
  text = inject(TextContentService)
  projects: {
    title: string,
    skills: string[],
    previewSrc: string ,
    description: {EN: string, DE: string},
    gitHub: string,
    live: string
    } [] = [
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      previewSrc: './assets/img/join_preview.png',
      description: {
        EN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        DE: 'Aufgabenverwaltungssystem inspiriert vom Kanban-Prinzip. Ermöglicht das Erstellen und Organisieren von Aufgaben mittels Drag-and-Drop-Funktionalität sowie die Zuweisung von Benutzern und Kategorien.'
      },
      gitHub: 'https://github.com/OliverJohn-git/Join',
      live: 'https://join.developer-olli.net/legalNotice.html'
    }, {
      title: 'El Polo Loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      previewSrc: './assets/img/Polo_loco_preview.png',
      description: {
        EN: 'Polo Loco is an jump and run game. Collect coins and sauce bottles to fight the Bosschicken.',
        DE: 'Polo Loco ist ein Jump-and-Run-Spiel. Sammle Münzen und Soßenflaschen, um gegen den Boss-Huhn zu kämpfen.'
      },
      gitHub: 'https://github.com/OliverJohn-git/Join',
      live: 'https://polo-loco.developer-olli.net'
    }
  ]
  overlayVisibility: boolean = false
  overlayProjectIndex: number = 0

  openProjectCard(index: number) {
    if(!this.overlayVisibility) this.toggleOverlay()
    this.overlayProjectIndex = index
  }

  nextProject() {
    if(this.overlayProjectIndex < this.projects.length - 1) {
      this.overlayProjectIndex++
    } else {
      this.overlayProjectIndex = 0
    }
  }

  toggleOverlay() {
    this.overlayVisibility = !this.overlayVisibility
  }

  propagationStop(event: Event) {
    event.stopPropagation()
  }
}

import { Component, inject } from '@angular/core';
import { TextContentService } from '../../shared/text-content/text-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.sass'
})
export class ReferencesComponent {
  text = inject(TextContentService)
  references: { reference: { EN: string, DE: string }, name: string }[] = []

  activeReferenceIndex: number = 0
  leftReferenceIndex: number = this.references.length - 1
  rightReferenceIndex: number = this.activeReferenceIndex + 1
  carouselDirection: 'left' | 'right' | '' = ''
  animationDuration: number = 600
  isMoving: boolean = false

  previousReference() {
    this.carouselDirection = 'left'
    this.isMoving = true
    setTimeout(() => {
      this.isMoving = false
      if (this.activeReferenceIndex > 0) {
        this.activeReferenceIndex--
        this.leftReferenceIndex = this.activeReferenceIndex > 0 ? this.activeReferenceIndex - 1 : this.references.length - 1
        this.rightReferenceIndex = this.activeReferenceIndex + 1
      } else {
        this.activeReferenceIndex = this.references.length - 1
        this.leftReferenceIndex = this.activeReferenceIndex - 1
        this.rightReferenceIndex = 0
      }
    }, this.animationDuration)
  }

  nextReference() {
    this.carouselDirection = 'right'
    this.isMoving = true
    setTimeout(() => {
      this.isMoving = false
      if (this.activeReferenceIndex < this.references.length - 1) {
        this.activeReferenceIndex++
        this.leftReferenceIndex = this.activeReferenceIndex - 1
        this.rightReferenceIndex = this.activeReferenceIndex < this.references.length - 1 ? this.activeReferenceIndex + 1 : 0
      } else {
        this.activeReferenceIndex = 0
        this.leftReferenceIndex = this.references.length - 1
        this.rightReferenceIndex = this.activeReferenceIndex + 1
      }
    }, this.animationDuration)
  }
}


import { Component, Input, ViewChild,Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule , isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-recipe-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent {
  @Input() recipe: any;
  @ViewChild('recipeModal') modalElement!: ElementRef;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); 
  }

  async openModal() {
    if (this.isBrowser && this.modalElement) {
      const { Modal } = await import('bootstrap'); 
      const modal = new Modal(this.modalElement.nativeElement);
      modal.show();
    }
  }
}

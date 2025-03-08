import { NavbarComponent } from '../landing/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';
import { Modal } from 'bootstrap';
import { from } from 'rxjs';

@Component({
  selector: 'app-searchpg',
  standalone: true,
  imports: [
    CommonModule, 
    RecipeModalComponent,
    RouterModule,
    NavbarComponent,
    FormsModule
  ],
  templateUrl: './searchpg.component.html',
  styleUrls: ['./searchpg.component.css']
})
export class SearchpgComponent {
  selectedRecipe: any = null; 
  @ViewChild('recipeModal') modal!: RecipeModalComponent;
  ingredients: string = ''; 
  recipes: any[] = []; 
  noResults: boolean = false; 

  constructor(private recipeService: RecipeService) {}
  onSearch() {
          if (!this.ingredients.trim()) return; 
    
        this.recipeService.getRecipes(this.ingredients).subscribe((data) => {
        this.recipes = data; 
        this.noResults = this.recipes.length === 0; 
        });
       }
 
       getRecipesdetail(id: number) {
        this.recipeService.getRecipesdetail(id).subscribe((data) => {
          console.log('Recipe Details:', data);
          this.selectedRecipe = data; 
      setTimeout(() => {
        if (this.modal) {
          this.modal.openModal();
        }
      }, 100);
    });
  }
}

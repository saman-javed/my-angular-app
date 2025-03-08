
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';
  private apiKey = '73c1db4dc8484b79bde18e7f4cad78f7'; 

  constructor(private http: HttpClient) {}

  getRecipes(ingredients: string): Observable<any> {
    const url = `${this.apiUrl}?ingredients=${ingredients}&number=6&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
  getRecipesdetail(id:any): Observable<any> {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}

import { Component } from '@angular/core';
import { HeroSecComponent } from './hero-sec/hero-sec.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSecComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] 
})
export class LandingComponent {
  constructor(
      private router: Router,
    ) {
  
    }
  navigateTosearch(): void {
    debugger;
    this.router.navigate(['search']);
  }
}

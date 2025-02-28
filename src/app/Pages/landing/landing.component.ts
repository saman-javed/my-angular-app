import { Component } from '@angular/core';
import { HeroSecComponent } from './hero-sec/hero-sec.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSecComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] 
})
export class LandingComponent {}

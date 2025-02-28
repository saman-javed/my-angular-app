import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-hero-sec',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './hero-sec.component.html',
  styleUrl: './hero-sec.component.css'
})
export class HeroSecComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(public scrollService: ScrollService) { }
}

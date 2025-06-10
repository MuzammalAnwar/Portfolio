import { Component } from '@angular/core';
import { ScrollService } from '../../shared/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public scrollService: ScrollService) { }
}

import { Component, Input } from '@angular/core';
import { SingleworkComponent } from './singlework/singlework.component';
import { PROJECTS } from './portfolio-project-data';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleworkComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = PROJECTS;
}

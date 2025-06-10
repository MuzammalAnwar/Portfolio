import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PROJECTS } from '../portfolio-project-data';

@Component({
  selector: 'app-singlework',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './singlework.component.html',
  styleUrl: './singlework.component.scss'
})
export class SingleworkComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() technologies!: string[];
  @Input() description!: string;
  @Input() liveLink!: string;
  @Input() githubLink!: string;
}

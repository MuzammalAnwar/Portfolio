import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlework',
  standalone: true,
  imports: [CommonModule],
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

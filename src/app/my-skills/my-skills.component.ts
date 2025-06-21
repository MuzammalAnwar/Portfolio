import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { SKILLS } from './skills.data';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
  export class MySkillsComponent {
    skills = SKILLS;

    constructor(public scrollService: ScrollService) { }
  }

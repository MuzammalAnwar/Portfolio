import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { "name": "Angular", "icon": "../../assets/icons/my-skills/angular-icons.svg" },
  { "name": "API", "icon": "../../assets/icons/my-skills/api-icon.svg" },
  { "name": "Cloud", "icon": "../../assets/icons/my-skills/cloud-icon.svg" },
  { "name": "Continuous Learning", "icon": "../../assets/icons/my-skills/continuality-learning-icon.svg" },
  { "name": "CSS", "icon": "../../assets/icons/my-skills/css-icon.svg" },
  { "name": "Django", "icon": "../../assets/icons/my-skills/django-icon.svg" },
  { "name": "Docker", "icon": "../../assets/icons/my-skills/docker-icon.svg" },
  { "name": "Flask", "icon": "../../assets/icons/my-skills/flask-icon.svg" },
  { "name": "Git", "icon": "../../assets/icons/my-skills/git-icon.svg" },
  { "name": "Heroku", "icon": "../../assets/icons/my-skills/heroku-icon.svg" },
  { "name": "HTML", "icon": "../../assets/icons/my-skills/html-icon.svg" },
  { "name": "JavaScript", "icon": "../../assets/icons/my-skills/js-icon.svg" },
  { "name": "Linux", "icon": "../../assets/icons/my-skills/linux-icon.svg" },
  { "name": "PostgreSQL", "icon": "../../assets/icons/my-skills/PostgreSQL-icon.svg" },
  { "name": "Python", "icon": "../../assets/icons/my-skills/python-icon.svg" },
  { "name": "Redis", "icon": "../../assets/icons/my-skills/redis-icon.svg" },
  { "name": "RxJS", "icon": "../../assets/icons/my-skills/rxjs-icon.svg" },
  { "name": "Scrum", "icon": "../../assets/icons/my-skills/scrum-icon.svg" },
  { "name": "SQL", "icon": "../../assets/icons/my-skills/SQL-icon.svg" },
  { "name": "TypeScript", "icon": "../../assets/icons/my-skills/ts-icon.svg" }
];

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = skills;

  constructor(public scrollService: ScrollService) { }
}

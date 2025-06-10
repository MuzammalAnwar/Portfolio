import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ScrollService } from '../shared/scroll.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public trans: any;

  constructor(public scrollService: ScrollService, public translate: TranslateService) {
    this.trans = translate;
  }

  SetFontSize(): string {
    return this.trans.currentLang === 'de' ? "text-german" : "text-default";
  }
}

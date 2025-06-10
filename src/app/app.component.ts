import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from './my-skills/my-skills.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './hero/header/header.component';
import { TranslateModule, TranslateService  } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, HeroComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Muzammal Anwar';
  constructor(public translate: TranslateService) { }
}

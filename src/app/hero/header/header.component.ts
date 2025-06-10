import { Component } from '@angular/core';
import { ScrollService } from '../../shared/scroll.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public scrollService: ScrollService, public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const browserLang = 'en';
    if (browserLang && browserLang.match(/en|de/)) {
      translate.use(browserLang);
    } else {
      translate.use('en');
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

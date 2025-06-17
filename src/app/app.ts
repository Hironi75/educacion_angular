import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-Educacion';

  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'qch']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang() || 'es';
    translate.use(browserLang.match(/es|qch/) ? browserLang : 'es');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}

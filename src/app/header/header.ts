import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [NgIf, RouterModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showLogin = false;
  showRegister = false;

  constructor(private router: Router, private translate: TranslateService) { }

  onLoginSubmit(event: Event) {
    event.preventDefault();
    this.showLogin = false;
    this.router.navigate(['/aprender-hoy']);
  }

  onRegisterSubmit(event: Event) {
    event.preventDefault();
    this.showRegister = false;
    this.router.navigate(['/aprender-hoy']);
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}

import { Component } from '@angular/core';
import { Header } from '../header/header';
import { HeroSection } from '../hero-section/hero-section';
import { FeaturesSection } from '../features-section/features-section';
import { CtaSection } from '../cta-section/cta-section';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-inicio',
  imports: [Header, HeroSection, FeaturesSection, CtaSection, FooterComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}

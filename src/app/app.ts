import { Component } from '@angular/core';

import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './shared/hero/hero';
import { FeaturesComponent } from './shared/features/features';
import { DemoComponent } from './shared/demo/demo';
import { FaqComponent } from './shared/faq/faq';
import { FooterComponent } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    DemoComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}

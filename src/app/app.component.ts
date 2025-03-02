import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OfferProductCardComponent} from './common-ui/offer-product-card/offer-product-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OfferProductCardComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trastinvest';
}

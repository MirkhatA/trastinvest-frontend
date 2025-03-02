import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-offer-product-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './offer-product-card.component.html',
  standalone: true,
  styleUrl: './offer-product-card.component.scss'
})
export class OfferProductCardComponent {

}

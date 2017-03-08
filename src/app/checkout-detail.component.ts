import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-checkout-detail',
  templateUrl: 'checkout-detail.component.html',
  styleUrls: [ './styles/styles.css' ]
})
export class CheckoutDetailComponent {

  @Input() product: Product;

}

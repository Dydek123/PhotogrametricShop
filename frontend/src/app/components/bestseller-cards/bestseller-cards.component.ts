import {Component, Input} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-bestseller-cards',
  templateUrl: './bestseller-cards.component.html',
  styleUrls: ['./bestseller-cards.component.scss']
})
export class BestsellerCardsComponent {
  @Input() product: ProductModel;


  constructor() {
  }

  getBackgroundStyle(imgSource: string): string {
    return 'background: url(/' + imgSource + ');'
      + '  background-repeat: no-repeat;' +
      '  background-size: contain;' +
      '  background-position: center;'
  }

  getUrl(id: number): string {
    return '/product/' + id;
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bestseller-cards',
  templateUrl: './bestseller-cards.component.html',
  styleUrls: ['./bestseller-cards.component.scss']
})
export class BestsellerCardsComponent {
  @Input() imgSource: string;
  @Input() description: string;
  @Input() price: number;

  getBackgroundStyle(imgSource: string): string {
    return 'background: url(/' + imgSource + ');'
      + '  background-repeat: no-repeat;' +
      '  background-size: contain;' +
      '  background-position: center;'
  }
}

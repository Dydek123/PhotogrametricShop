import {Component} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories = [
    {
      name: 'Shoes',
      img: 'example.png'
    },
    {
      name: 'Clothes',
      img: 'tshirt.jpg'
    },
    {
      name: 'Jewelery',
      img: 'necklace.jpeg'
    },
    {
      name: 'Watch',
      img: 'watch.jpeg'
    },
    {
      name: 'Medicine',
      img: 'syrup.webp'
    },
    {
      name: 'Sport',
      img: 'kit.png'
    },
    {
      name: 'Food',
      img: 'fork.jpg'
    },
    {
      name: 'Toy',
      img: 'toy.png'
    }
  ]

  getBackgroundStyle(img: string) {
    return 'background: url(/assets/' + img + ');'
      + '  background-repeat: no-repeat;' +
      '  background-size: contain;' +
      '  background-position: center;'
  }
}

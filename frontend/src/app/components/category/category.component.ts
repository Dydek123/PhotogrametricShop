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
      img: 'example.png'
    },
    {
      name: 'Jewelery',
      img: 'example.png'
    },
    {
      name: 'Watch',
      img: 'example.png'
    },
    {
      name: 'Cup',
      img: 'example.png'
    },
    {
      name: 'T-shirt',
      img: 'example.png'
    },
    {
      name: 'T-shirt',
      img: 'example.png'
    },
    {
      name: 'T-shirt',
      img: 'example.png'
    }
  ]
}

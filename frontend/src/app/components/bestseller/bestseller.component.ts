import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {
  products: ProductModel[];

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(products => {
        this.products = products.slice(0, 3);
        console.log(this.products);
      })
  }
}

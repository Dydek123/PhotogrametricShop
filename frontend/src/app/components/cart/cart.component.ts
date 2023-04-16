import {Component} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  products: ProductModel[] = [];

  constructor(service: ProductService) {
    // this.products = service.productsInCart;
    const itemsInStorage = localStorage.getItem('cart');
    if (itemsInStorage) {
      console.log(this.products);
      this.products = JSON.parse(itemsInStorage);
    }
  }

  removeItem(product: ProductModel) {
    this.products = this.products.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(this.products))
  }

  getSum() {
    return this.products.reduce((partialSum, a) => partialSum + a.price, 0).toFixed(2);
  }
}

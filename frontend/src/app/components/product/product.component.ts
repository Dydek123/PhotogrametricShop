import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductModel;

  constructor(private route: ActivatedRoute,
              private service: ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.setProduct(param['id']))
  }

  setProduct(id: number): void {
    this.service.getById(id)
      .subscribe(product => {
        this.product = product;
        console.log(this.product);
      })
  }
}

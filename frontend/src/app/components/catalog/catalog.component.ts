import {Component, ViewChild} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {MatDrawer} from "@angular/material/sidenav";
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  products: ProductModel[];

  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private service: CatalogService,
              private productService: ProductService) {
    service.onMenuClick.subscribe(() => this.drawer.toggle());
    this.productService.getAll()
      .subscribe(products => this.products = products)
  }


}

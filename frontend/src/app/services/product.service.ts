import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static URL = '/product';

  public productsInCart: ProductModel[] = [];

  constructor(private api: ApiService<ProductModel>) {
  }

  getAll(): Observable<ProductModel[]> {
    return this.api.getAll(ProductService.URL);
  }

  getById(id: number): Observable<ProductModel> {
    return this.api.getById(ProductService.URL, id);
  }
}

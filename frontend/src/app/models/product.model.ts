import {Category} from "../enum/category";

export class ProductModel {
  id: number;
  category: Category;
  name: string;
  description: string;
  price: number;
  url: string;
}

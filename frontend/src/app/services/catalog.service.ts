import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  onMenuClick: Subject<void> = new Subject<void>();

  toggleMenu() {
    this.onMenuClick.next();
  }
}

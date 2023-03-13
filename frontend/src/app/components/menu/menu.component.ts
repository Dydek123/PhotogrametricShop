import {Component} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  loginModalVisible: boolean;
  loginMode: boolean;


  constructor(private service: CatalogService) {
  }

  onLoginOpen() {
    this.loginModalVisible = true;
    this.loginMode = true;
  }

  onMenuClick() {
    this.service.toggleMenu();
  }
}

import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loginModalVisible: boolean;
  loginMode: boolean;
  showCart: boolean;
  user: UserModel | null;


  constructor(private service: CatalogService) {
  }

  ngOnInit() {
    this.getUserFromStorage();
  }

  onLoginOpen() {
    this.loginModalVisible = true;
    this.loginMode = true;
  }

  onMenuClick() {
    this.service.toggleMenu();
  }

  toogleCard() {
    this.showCart = !this.showCart;
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }

  onLoginSuccess() {
    this.getUserFromStorage();
    this.loginModalVisible = false;
  }

  private getUserFromStorage() {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      this.user = JSON.parse(userStorage);
    } else {
      this.user = null;
    }
  }
}

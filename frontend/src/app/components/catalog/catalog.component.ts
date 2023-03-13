import {Component, ViewChild} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private service: CatalogService) {
    service.onMenuClick.subscribe(() => this.drawer.toggle())
  }


}

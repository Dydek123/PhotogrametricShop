import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {ProductComponent} from "./components/product/product.component";
import {SubmitPanelComponent} from "./components/submit-panel/submit-panel.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'submit', component: SubmitPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

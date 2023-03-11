import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {EntryPageComponent} from './components/entry-page/entry-page.component';
import {BestsellerComponent} from './components/bestseller/bestseller.component';
import {BestsellerCardsComponent} from './components/bestseller-cards/bestseller-cards.component';
import {MatCardModule} from "@angular/material/card";
import {CategoryComponent} from './components/category/category.component';
import {ContactComponent} from './components/contact/contact.component';
import {MatListModule} from "@angular/material/list";
import {LoginComponent} from './components/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {SingupComponent} from './components/singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    EntryPageComponent,
    BestsellerComponent,
    BestsellerCardsComponent,
    CategoryComponent,
    ContactComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

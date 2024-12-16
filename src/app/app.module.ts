import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './Components/nav-bar-component/nav-bar-component.component';
import { ProductsComponent } from './Components/products/products.component';
import { AjouterProductsComponent } from './Components/products/ajouter-products/ajouter-products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    ProductsComponent,
    AjouterProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

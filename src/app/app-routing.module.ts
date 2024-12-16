import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProductsComponent } from './Components/products/ajouter-products/ajouter-products.component';
import { Product } from './Core/Models/Products';

const routes: Routes = [ { path: 'ajouter-produit', component: AjouterProductsComponent },
  { path: 'products', component: Product },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

import { Component } from '@angular/core';
import { Product } from '../../Core/Models/Products';
import { ProductService } from '../../services/product.services';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  x: Product = new Product();
  show: boolean = false;
  listFavoris:Product[]=[]
  listProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.listProducts = productService.listProducts;
  }

  
}


import { Injectable } from '@angular/core';
import { Product } from '../Core/Models/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listProducts: Product[] = [
    {
      id: 1,
      name: 'NaOH',
      description: 'Nefaste',
      price: 8,
      available:false,
      likes: [0],
    },
    {
      id: 8,
      name: 'protein',
      description: 'nutrition',
      price: 8000,
      available: true,
      likes: [8],
    },
    
    
  ];
  constructor() { }
  
  ajouterproduct(Products:Product) {
    this.listProducts.push(Products)
  }
}

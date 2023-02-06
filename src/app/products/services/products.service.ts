import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products: Array<ProductModel> = [
    {
      Id: 1,
      Name: 'Product1', 
      Description: 'Description1', 
      Price: 100,
      Category: 0,
      IsAvailable: true
    },
    {
      Id: 2,
      Name: 'Product2', 
      Description: 'Description2', 
      Price: 200,
      Category: 0,
      IsAvailable: true
    },
    {
      Id: 3,
      Name: 'Product3', 
      Description: 'Description3', 
      Price: 300,
      Category: 0,
      IsAvailable: false
    }
  ];

  getProducts(): Observable<Array<ProductModel>> {
    return of(this.products);
  }
}

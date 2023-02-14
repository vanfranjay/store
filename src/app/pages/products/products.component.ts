import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products!: Product[];
  constructor(
    private productSvc: ProductsService
  ) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
      .pipe(
        // tap(res => console.log(res))
        tap((products: Product[]) => this.products = products )
      )
      .subscribe();
  }
}

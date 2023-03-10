import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
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
    private productSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
      .pipe(
        // tap(res => console.log(res))
        tap((products: Product[]) => this.products = products )
      )
      .subscribe();
  }

  addToCart(product: Product): void {
    console.log('add ti cart', product);
    this.shoppingCartSvc.updateCart(product);
  }
}

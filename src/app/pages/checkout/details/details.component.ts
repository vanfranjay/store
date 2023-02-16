import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  dataSource = new MatTableDataSource<any>();
  columnsToDisplay = ['userName', 'age'];

  total$  = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  constructor(
    private shoppingCartSvc: ShoppingCartService
  ){}
}

import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from 'src/app/interfaces/stores.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: '',
    store: '',
    shippingAddress: '',
    city: ''
  };
  stores: Store[] = [
    
  ]
  constructor(
    private dataSvc: DataService
  ) { }
  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void{
    console.log(value);
  }

  onSubmit(): void{
    console.log('Guardar')
  }
  getStores():void{
    this.dataSvc.getStores()
    .pipe(
      tap((stores:Store[]) => this.stores = stores)
    )
    .subscribe()
  }
}

// tap((stores:Store[]) => this.stores = stores)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatFormFieldModule,
    MaterialModule,
    FormsModule,
    MatRadioModule
  ]
})
export class CheckoutModule { }

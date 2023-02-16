import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent
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

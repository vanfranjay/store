import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiDominioComponent } from './pages/mi-dominio/mi-dominio.component';

const routes: Routes = [
  {path: "miDominio", component: MiDominioComponent, title: "mi-dominio"},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {path: "**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { CollectionComponent } from './pages/collection/collection.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'collection/:id', component: CollectionComponent },
  { path: '**', component: NotFoundComponent },
];

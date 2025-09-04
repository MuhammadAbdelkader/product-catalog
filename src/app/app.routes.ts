import { Routes } from '@angular/router';
import { Products } from './components/pages/products/products';
import { ProductDetails } from './components/pages/product-details/product-details/product-details';
import { Favorites } from './components/pages/favorites/favorites/favorites';
import { NotFound } from './components/pages/not-found/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetails },
  { path: 'favorites', component: Favorites },
  { path: '**', component: NotFound }
];

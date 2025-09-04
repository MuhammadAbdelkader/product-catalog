import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../product-card/product-card';
import { Product, ProductService } from './../../../../services/productService';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, ProductCard, RouterModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
  favorites: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.productService.getFavorites();
  }

  toggleFavorite(productId: number): void {
    this.productService.removeFromFavorites(productId);
    this.loadFavorites(); // Refresh the favorites list
  }
}

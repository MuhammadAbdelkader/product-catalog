import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../../services/productService';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  products: Product[] = [];
  loading = true;
  error = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  /** Fetch all products from the service */
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.products;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load products. Please try again.';
        this.loading = false;
      }
    });
  }

  /** Toggle a product as favorite */
  toggleFavorite(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const isFav = this.productService.getFavorites().some(f => f.id === productId);
    isFav
      ? this.productService.removeFromFavorites(productId)
      : this.productService.addToFavorites(product);
  }

  /** Add a product to cart */
  onAddToCart(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    if (typeof (this.productService as any).addToCart === 'function') {
      (this.productService as any).addToCart(product);
    } else {
      console.warn('⚠️ addToCart method not implemented in ProductService.');
    }
  }

  /** Check if a product is already favorited */
  isFavorite(productId: number): boolean {
    return this.productService.getFavorites().some(fav => fav.id === productId);
  }

  /** Scroll back to the top smoothly */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

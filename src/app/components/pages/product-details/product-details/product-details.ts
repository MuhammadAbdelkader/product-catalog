// product-details.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ProductReviews, Review } from '../../product-reviews/product-reviews';
import { Product, ProductService } from '../../../../services/productService';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductReviews],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit {
  product?: Product;
  loading = true;
  error = '';
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid product id';
      this.loading = false;
      return;
    }

    this.productService.getProductById(id).subscribe({
      next: (p) => {
        this.product = p;
        this.checkIfFavorite();
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load product';
        this.loading = false;
      }
    });
  }

  checkIfFavorite(): void {
    if (this.product) {
      this.isFavorite = this.productService.getFavorites()
        .some(fav => fav.id === this.product!.id);
    }
  }

  toggleFavorite(): void {
    if (this.product) {
      if (this.isFavorite) {
        this.productService.removeFromFavorites(this.product.id);
      } else {
        this.productService.addToFavorites(this.product);
      }
      this.isFavorite = !this.isFavorite;
    }
  }

  calculateDiscountedPrice(): number {
    if (this.product?.discountPercentage) {
      return this.product.price * (1 - this.product.discountPercentage / 100);
    }
    return this.product?.price || 0;
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}

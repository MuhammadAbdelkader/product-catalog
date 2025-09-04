import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Product } from '../../../services/productService';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;
  @Input() isFavorite = false;
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() addToCart = new EventEmitter<number>();

  constructor(private router: Router) {}

  /** Navigate to the product details page */
  onCardClick(): void {
    this.router.navigate(['/products', this.product.id]);
  }

  /** Toggle favorite button + animation */
  onToggleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    this.toggleFavorite.emit(this.product.id);

    const btn = event.currentTarget as HTMLElement;
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 500);
  }

  /** Add product to cart + animate icon */
  onAddToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.addToCart.emit(this.product.id);

    const btn = event.currentTarget as HTMLElement;
    const icon = btn.querySelector('i');
    if (icon) {
      icon.classList.add('clicked');
      setTimeout(() => icon.classList.remove('clicked'), 800);
    }
  }

  /** Calculate discounted price */
  calculateDiscountedPrice(): number {
    const price = this.product?.price ?? 0;
    const discount = this.product?.discountPercentage ?? 0;
    return parseFloat((price * (1 - discount / 100)).toFixed(2));
  }

  /** Calculate saved amount */
  calculateSavedAmount(): number {
    const saved = (this.product?.price ?? 0) - this.calculateDiscountedPrice();
    return saved < 1 ? 0 : Math.floor(saved);
  }
}

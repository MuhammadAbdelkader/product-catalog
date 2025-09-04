import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-reviews.html',
  styleUrls: ['./product-reviews.css'], // note: styleUrls (plural)
})
export class ProductReviews {
  @Input() reviews: Review[] = [];

  /** Make a simple iterable of length `n` for *ngFor/@for */
  toRange(n: number): number[] {
    const len = Math.max(0, Math.floor(n));
    return Array.from({ length: len }, (_, i) => i);
  }

  /** Clamp 0..5, then split into full/half/empty */
  getStarsData(ratingRaw: number) {
    const rating = Math.min(5, Math.max(0, ratingRaw));
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);
    return { full, hasHalf, empty };
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}

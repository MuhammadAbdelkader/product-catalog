import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  reviews?: Review[];
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  returnPolicy?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';
  private favorites: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addToFavorites(product: Product): void {
    if (!this.favorites.find((p) => p.id === product.id)) {
      this.favorites.push(product);
      console.log('Added to favorites:', product.title);
    }
  }

  removeFromFavorites(productId: number): void {
    const removedProduct = this.favorites.find(p => p.id === productId);
    this.favorites = this.favorites.filter((p) => p.id !== productId);
    if (removedProduct) {
      console.log('Removed from favorites:', removedProduct.title);
    }
  }

  getFavorites(): Product[] {
    return this.favorites;
  }

  isFavorite(productId: number): boolean {
    return this.favorites.some(p => p.id === productId);
  }
}

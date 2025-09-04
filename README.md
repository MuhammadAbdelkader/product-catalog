# 🛍️ Mini Product Catalog

A modern, responsive **Angular 20** product catalog application featuring **product browsing**, **favorites management**, and **detailed product views**.

🔗 **Live Demo**: [https://product-catalog-alpha-ruby.vercel.app/](https://product-catalog-alpha-ruby.vercel.app/)  
👤 **Author**: [Muhammad Abdelkader](https://github.com/MuhammadAbdelkader/)

---

## 🎯 Project Overview

This project demonstrates **core Angular concepts** including:
- Component-based architecture  
- Reusable services  
- Angular routing with parameters  
- Data binding techniques  
- Modern UI design using **Bootstrap** and **Font Awesome**

---

## ✨ Features

- **Product Catalog** — Browse products fetched from **DummyJSON API**
- **Product Details** — View detailed info with reviews and pricing
- **Favorites Management** — Add or remove products from favorites
- **Responsive Design** — Fully optimized for mobile and desktop
- **Interactive UI** — Smooth animations and hover effects
- **Error Handling** — Proper loading states and user-friendly messages
- **Modern Routing** — Parameterized routes and Angular Router guards

---

## 🛠️ Tech Stack

- **Framework**: Angular 20
- **UI Library**: Bootstrap 5
- **Icons**: Font Awesome 6
- **API**: [DummyJSON Products](https://dummyjson.com/products)
- **Styling**: Custom CSS + Bootstrap utilities
- **HTTP Client**: Angular HttpClient with **RxJS**

---

## 📁 Project Structure

```
src/app/
├── components/
│   ├── navbar/                # Top navigation bar
│   └── pages/
│       ├── products/          # Product listing page
│       ├── product-details/   # Detailed view of a single product
│       ├── favorites/         # Favorites list
│       ├── not-found/         # 404 page
│       ├── product-card/      # Reusable product card
│       └── product-reviews/   # Product reviews section
├── directives/
│   └── hover-highlight.ts     # Custom hover directive
├── services/
│   └── product.service.ts     # API calls & favorites management
├── app.routes.ts              # App routing
├── app.*                      # Root component
└── main.ts                    # Application bootstrap
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9
- **Angular CLI** ≥ 20

### Installation

```bash
# Clone repository
git clone https://github.com/MuhammadAbdelkader/product-catalog.git
cd product-catalog

# Install dependencies
npm install

# Install Bootstrap & Font Awesome
npm install bootstrap @fortawesome/fontawesome-free
```

### Configure Styles
In `angular.json` → add under styles:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
  "src/styles.css"
]
```

### Start Development Server
```bash
ng serve
```
Then open: http://localhost:4200

---

## 🧭 Navigation Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Products | Redirects to products list |
| `/products` | Products | Main product catalog |
| `/products/:id` | ProductDetails | Single product details |
| `/favorites` | Favorites | Favorite products list |
| `**` | NotFound | 404 fallback route |

---

## 🔑 Key Components

### ProductService
Handles:
- API calls to fetch products
- Favorites management
- Type-safe models & interfaces

### ProductCard
Reusable UI card for:
- Product images, titles, and pricing
- Favorite toggling
- Navigation to product details

### ProductDetails
Detailed product view:
- Full description, pricing, discount, stock status
- Integrated reviews section
- Add/remove favorites support

### ProductReviews
Dedicated review display:
- Star ratings and reviewer info
- Empty state if no reviews exist

---

## 🎨 UI & Design Features

- **Color Scheme**: Modern, elegant, and clean
- **Responsive Layout**: Bootstrap-powered adaptive grid
- **Hover Interactions**: Custom directive for interactivity
- **Loading States**: Spinner-based UX during data fetch
- **Smooth Animations**: Transitions for better experience

---

## 🧪 Angular Concepts Demonstrated

- **Component Communication**: Parent ↔ Child props & events
- **Services & DI**: Centralized state & API calls
- **Routing**: Nested, parameterized, and fallback routes
- **Directives**: Custom hover-based styling
- **RxJS**: Observables for handling async data
- **Data Binding**: Property, event & two-way bindings
- **TypeScript Interfaces**: Strong typing for reliability

---

## 🌍 Live Demo

🔗 **Live Project**: [https://product-catalog-alpha-ruby.vercel.app/](https://product-catalog-alpha-ruby.vercel.app/)  
👤 **Author**: [Muhammad Abdelkader](https://github.com/MuhammadAbdelkader/)

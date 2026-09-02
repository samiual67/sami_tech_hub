# Sami Live Fashion

A modern fashion & clothing e-commerce web application built with React and Vite. Browse products by category (Men, Women, Kids), view product details, manage a shopping cart, and sign up / log in — all with a fast, responsive UI.

## Features

- Browse products by category (Men / Women / Kids)
- Product detail page with size selection and related products
- Add to cart / remove from cart with live cart total
- Newest collections and popular products sections
- Login / Signup page
- Responsive design with React Context API for global cart state

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **React Router DOM** — client-side routing
- **Context API** — global state management (cart)
- **CSS** — custom styling

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/samiual67/sami_tech_hub.git
   cd sami_tech_hub
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── Components/     # Reusable UI components (Navbar, Footer, Hero, Item, etc.)
├── Context/        # ShopContext for cart state management
├── Pages/          # Route pages (Shop, Cart, Product, LoginSignup, ShopCategory)
└── App.jsx         # Main app component with routing
```

## Author

Samiual (Sami)

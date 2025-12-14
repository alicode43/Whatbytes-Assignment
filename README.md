# E-Commerce Product Catalog

A modern, responsive e-commerce product catalog built with Next.js 16, featuring advanced filtering, shopping cart functionality, and a sleek user interface.

## 🚀 Features

### Core Functionality
- **Product Listing**: Grid-based product display with hover effects and detailed information
- **Product Details**: Individual product pages with comprehensive descriptions
- **Shopping Cart**: Full cart management with quantity controls and localStorage persistence
- **Search Functionality**: Real-time search across product names and descriptions

### Advanced Filtering
- **Category Filtering**: Filter by Electronics, Clothing, Home, Accessories, and Footwear
- **Price Range Filtering**: Min/max price range with URL-based persistence
- **URL-Based Filters**: Shareable URLs with filter parameters (e.g., `?category=electronics&price=0-1000`)
- **Combined Filtering**: Multiple filters work together seamlessly

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fixed Sidebar**: Persistent filter sidebar on desktop (hidden on mobile)
- **Loading States**: Suspense boundaries for smooth user experience
- **Interactive UI**: Hover effects, smooth transitions, and intuitive navigation

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Context API**: Global state management for cart and search
- **LocalStorage**: Cart persistence across browser sessions
- **API Routes**: RESTful API endpoints for product data
- **Modern React**: Hooks, Suspense, and latest Next.js features

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Data Persistence**: LocalStorage
- **Font**: Geist (optimized by Next.js)

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── getProduct/
│   │   │   └── route.ts          # API endpoint for all products
│   │   └── getProduct/[id]/
│   │       └── route.ts          # API endpoint for individual products
│   ├── cart/
│   │   └── page.tsx              # Shopping cart page
│   ├── product/[id]/
│   │   └── page.tsx              # Individual product detail page
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Main product listing page
├── components/
│   ├── sidebar.tsx               # Filter sidebar component
│   ├── navbar.tsx                # Navigation bar with search and cart
│   ├── footer.tsx                # Footer component
│   └── Rating.tsx                # Star rating component
├── context/
│   ├── cartContext.tsx           # Cart state management
│   └── searchContext.tsx         # Search state management
├── data/
│   └── products.json             # Product data
└── public/                       # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Cart Management
- Add products to cart from listing or detail pages
- Adjust quantities with + and - buttons
- Remove items individually or clear entire cart
- Cart count badge in navigation
- Persistent storage across sessions

### Filtering System
- **Category Filter**: Radio buttons for product categories
- **Price Range**: Min/max input fields with URL synchronization
- **Search**: Navbar search bar with real-time filtering
- **URL Parameters**: Filters reflected in URL for sharing/bookmarking

### Responsive Design
- **Desktop**: Fixed sidebar with filters, grid layout
- **Mobile**: Collapsed sidebar, stacked layout
- **Tablet**: Adaptive grid columns

## 🔧 API Endpoints

### GET /api/getProduct
Returns all products with optional query parameters.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": "$99",
    "category": "Electronics",
    "description": "Detailed product description...",
    "image": "https://example.com/image.jpg",
    "rating": 4
  }
]
```

### GET /api/getProduct/[id]
Returns a single product by ID.

**Parameters:**
- `id` (number): Product ID

**Response:** Single product object or 404 if not found.

## 🎨 Styling

The application uses Tailwind CSS with a custom design system:

- **Primary Colors**: Blue (#0056b3, #002a5c)
- **Background**: Light gray (#f9fafb)
- **Typography**: Geist font family
- **Shadows**: Subtle shadows for depth
- **Transitions**: Smooth hover effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

### Build Command
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful icon library
- [Unsplash](https://unsplash.com/) - Product images

---

Built with ❤️ using Next.js and TypeScript

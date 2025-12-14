"use client"; 

import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import Rating from "@/components/Rating";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearch } from "@/context/searchContext";
import { useCart } from "@/context/cartContext";
import { useSearchParams, useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: number;
}

export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const [products, setProducts] = useState<Product[]>([])
  const { searchQuery } = useSearch();
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateFilters = (newCategory?: string, newPriceRange?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newCategory !== undefined) {
      params.set('category', newCategory);
    }
    if (newPriceRange !== undefined) {
      params.set('price', newPriceRange);
    }
    router.push(`?${params.toString()}`);
  };

  const setCategory = (cat: string) => updateFilters(cat);
  const setPriceMin = (min: number) => {
    const currentMax = priceMax;
    updateFilters(undefined, `${min}-${currentMax}`);
  };
  const setPriceMax = (max: number) => {
    const currentMin = priceMin;
    updateFilters(undefined, `${currentMin}-${max}`);
  };

  const category = searchParams.get('category') || 'All';
  const priceRange = searchParams.get('price') || '0-10000';
  const [priceMin, priceMax] = priceRange.split('-').map(Number);

  useEffect(() => {
    fetch('/api/getProduct')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Filter products based on search query, category, and price
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
    const matchesPrice = price >= priceMin && price <= priceMax;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (products.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
       
        <div className="flex grow max-w-7xl mx-auto w-full py-8 px-4 gap-8">
          <aside className="w-72 shrink-0 hidden lg:block fixed left-0 top-0 h-full z-10">
                <Sidebar category={category} setCategory={setCategory} priceMin={priceMin} priceMax={priceMax} setPriceMin={setPriceMin} setPriceMax={setPriceMax} />
          </aside>
          <main className="grow lg:ml-72">
            <h1 className="text-3xl font-bold text-[#002a5c] mb-8">Product Listing</h1>
            <div>There are no products to display.</div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans ove">
   
      
      {/* Main Layout Container */}
      <div className="flex grow  mx-auto w-full py-8 px-4 gap-16">
        
        {/* Sidebar - Hidden on mobile, fixed width on desktop */}
        <aside className="w-72 shrink-0 hidden lg:block">
          <Sidebar category={category} setCategory={setCategory} priceMin={priceMin} priceMax={priceMax} setPriceMin={setPriceMin} setPriceMax={setPriceMax} />
        </aside>

        {/* Product Grid Area */}
        <main className="grow">
           <h1 className="text-3xl font-bold text-[#002a5c] mb-8">Product Listing</h1>
           
           {filteredProducts.length === 0 ? (
             <div className="text-center py-12">
               <p className="text-lg text-gray-500">No products match your search or filters. Try adjusting your criteria.</p>
             </div>
           ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              
              <Link key={product.id} href={`/product/${product.id}`} className="relative group h-95 w-full">
                
           
                <div className="absolute inset-0 bg-white p-4 rounded-2xl shadow-sm border border-transparent flex flex-col transition-opacity duration-200 group-hover:opacity-0 pointer-events-none">
                  <div className="h-48 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden relative">
                    <Image 
                      fill
                      src={product.image} 
                      alt={product.name} 
                      className="object-contain mix-blend-multiply" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#002a5c] mb-1">{product.name}</h3>
                  <p className="text-xl font-bold text-gray-900 mb-2">{product.price}</p>
                  
                  <div className="mb-4">
                     <Rating initialRating={product.rating} />
                  </div>

                  <button className="mt-auto w-full bg-[#0056b3] text-white py-2.5 rounded-lg font-medium" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
                    Add to Cart
                  </button>
                </div>

              {/* Hover on product */}
 
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                w-full md:w-full md:h-full bg-white rounded-2xl shadow-2xl p-4 
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-300 z-50 flex gap-4 ring-1 ring-gray-200">
{/*                   
                      <Link key={product.id} href={`/product/${product.id}`} className="relative group h-95 w-full"> */}
                  <div className="w-2/5 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden relative">
                    <Image 
                      fill
                      src={product.image} 
                      alt={product.name} 
                      className="object-contain mix-blend-multiply" 
                      />
                  </div>
                      {/* </Link> */}

                  <div className="w-3/5 flex flex-col text-left gap-">
                           <Link key={product.id} href={`/product/${product.id}`} className="relative group h-95 w-full">
                     
                    <h3 className="text-lg font-bold text-[#002a5c]">{product.name}</h3>
                    <p className="text-lg font-bold text-gray-900 mb-1">{product.price}</p>
                    
                    <div className="mb-2">
                        <Rating initialRating={product.rating} />
                    </div>

                    <p className="text-xs text-gray-500 mb-2 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                        <p className="text-xs text-gray-400 font-semibold mb-1">Category</p>
                        <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                    </div>
                          </Link>

                    <button className="w-full bg-[#0056b3] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#004494] transition-colors shadow-sm" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
                      Add to Cart
                    </button>
                  </div>
                </div>

              </Link>
            ))}
           </div>
           )}
        </main>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}
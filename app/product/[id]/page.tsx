'use client'
import { use, useState, useEffect } from 'react'
import Image from 'next/image'
import Rating from '@/components/Rating'
import { useCart } from '@/context/cartContext'

interface PageProps {
  params: Promise<{ id: string }>
}
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: number;
}

function Page({ params }: PageProps) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`/api/getProduct/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching product:', err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Product not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96 bg-gray-50 rounded-xl overflow-hidden">
            <Image
              fill
              src={product.image}
              alt={product.name}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#002a5c] mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
            <div className="mb-4">
              <Rating initialRating={product.rating} />
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500 mb-6">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <button className="w-full bg-[#0056b3] text-white py-3 rounded-lg font-medium hover:bg-[#004494] transition-colors" onClick={() => product && addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page

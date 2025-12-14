import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export default function Home() {
 const products = [
    { 
      id: 1, 
      name: 'Running Shoes', 
      price: '$99', 
      category: 'Footwear',
      description: 'Lightweight, durable shoes designed for long-distance running with breathable mesh.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      price: '$129', 
      category: 'Electronics',
      description: 'Noise-cancelling over-ear headphones with 20-hour battery life and deep bass.', 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 3, 
      name: 'Backpack', 
      price: '$129', 
      category: 'Accessories',
      description: 'Water-resistant travel backpack with a dedicated laptop compartment and ergonomic straps.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 4, 
      name: 'Smartwatch', 
      price: '$249', 
      category: 'Electronics',
      description: 'Track your fitness, heart rate, and notifications on the go with this sleek smartwatch.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 5, 
      name: 'Sunglasses', 
      price: '$149', 
      category: 'Accessories',
      description: 'Polarized lenses offering 100% UV protection in a classic, stylish frame.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 6, 
      name: 'Digital Camera', 
      price: '$499', 
      category: 'Electronics',
      description: 'Capture stunning 4K video and high-resolution photos with this compact mirrorless camera.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80' 
    },
  ];
  return (
<>
<Navbar />
<div className="flex">
  <Sidebar />
  <div>
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 rounded-xl" />
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          <p className="text-xl font-bold text-gray-900 mb-4">{product.price}</p>
          <button className="mt-auto w-full bg-[#0056b3] text-white py-2.5 rounded-lg font-medium hover:bg-[#004494] transition-colors">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  </div>
  <Footer />
</>
  );
}


 
'use client';

import { Search, ShoppingCart } from 'lucide-react'; 
import { useSearch } from '@/context/searchContext';

function Navbar() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
 
    <nav className="flex items-center justify-between bg-blue-600 px-8 py-4 shadow-md">
       
      <div className="text-white text-3xl font-bold cursor-pointer">
        Logo
      </div>

  
      <div className="flex items-center w-full max-w-xl mx-4 bg-blue-500 border border-[#588bc4] rounded-lg px-4 py-2.5">
        <Search className="text-white w-5 h-5" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-white placeholder-gray-200 ml-3 text-sm" 
          placeholder="Search for products..." 
        />
      </div>

     
      <button className="flex items-center bg-[#002a5c] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#00367a] transition-colors duration-200">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Cart
      </button>
      
    </nav>
  );
}

export default Navbar;
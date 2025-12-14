import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react';
function Footer() {
  return (
   <footer className="bg-[#002a5c] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
 
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-6">Filters</h3>
          <ul className="flex flex-col gap-3 text-gray-300 mb-8">
            <li className="hover:text-white cursor-pointer transition-colors w-fit">All</li>
            <li className="hover:text-white cursor-pointer transition-colors w-fit">Electronics</li>
          </ul>
        
          <div className="text-sm text-gray-400 mt-auto">
            © 2024 American
          </div>
        </div>

     
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-6">About Us</h3>
          <ul className="flex flex-col gap-3 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors w-fit">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors w-fit">Contact</li>
          </ul>
        </div>

   
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex gap-4">
         
            <a href="https://www.facebook.com" className="w-10 h-10 bg-[#0056b3] rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 shadow-sm">
              <Facebook size={20} className="fill-current text-white" />
            </a>
            <a href="https://www.x.com/" className="w-10 h-10 bg-[#0056b3] rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 shadow-sm">
              <Twitter size={20} className="fill-current text-white" />
            </a>
            <a href="https://www.instagram.com" className="w-10 h-10 bg-[#0056b3] rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 shadow-sm">
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

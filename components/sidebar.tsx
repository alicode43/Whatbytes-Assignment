'use client'

interface SidebarProps {
  category: string;
  setCategory: (category: string) => void;
  priceMin: number;
  priceMax: number;
  setPriceMin: (price: number) => void;
  setPriceMax: (price: number) => void;
}

function Sidebar({ category, setCategory, priceMin, priceMax, setPriceMin, setPriceMax }: SidebarProps) {
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 min-h-screen items-start">
      
      {/* Filter Section */}
      <div className="w-72 bg-blue-600  p-6 rounded-3xl text-white shadow-md">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Category Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">Category</h3>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center cursor-pointer">
                <div className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${category === cat ? 'border-[#0056b3]' : 'border-gray-300'}`}>
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                  {category === cat && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0056b3]"></div>
                  )}
                </div>
                <span className="text-base">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Price Range</h3>
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-sm mb-1">Min Price</label>
              <input
                type="number"
                value={priceMin}
                onChange={(e) => setPriceMin(+e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Max Price</label>
              <input
                type="number"
                value={priceMax}
                onChange={(e) => setPriceMax(+e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-white"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar
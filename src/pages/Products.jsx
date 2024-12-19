import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import products from '../data/products.json'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    "Men's Clothing",
    "Women's Clothing",
    'Jewelery',
    'Electronics'
  ];

 /*  const products = [
    {
      id: 1,
      name: 'Canvas Backpack',
      image: '/backpack.jpg',
      category: "Men's Clothing",
      price: 49.99
    },
    {
      id: 2, 
      name: 'Raglan T-Shirt',
      image: '/tshirt.jpg',
      category: "Men's Clothing",
      price: 24.99
    },
    {
      id: 3,
      name: 'Office Chair',
      image: '../assets/images/keyboard.png', 
      category: "Furniture",
      price: 89.99
    },
    {
        id: 4,
        name: 'Electronic Watch',
        image: '../assets/images/tv.png', 
        category: "Electronics",
        price: 89.99
      }
  ]; */

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-3xl font-medium mb-8 text-center">Latest Products</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md transition-colors
              ${
                selectedCategory === category
                ? 'bg-black text-white'
                : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white border border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <div className="mx-auto my-2 relative group" style={{width:'85%', height:'77%'}}>
              <img
                src={product.image}
                alt={product.name}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              {/* Quick Add Button */}
              <button className="w-[80%] text-center absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-400 text-black px-4 py-2 rounded-full flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <ShoppingBag size={18} />
                Quick Add
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
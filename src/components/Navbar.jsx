import { useState } from 'react'
import { LogIn, UserPlus, ShoppingCart } from 'lucide-react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between px-8 lg:px-20 py-4 bg-white shadow-md">
    {/* Logo */}
    <div className="lg:text-xl font-semibold">
      E-commerce
    </div>

    {/* Hamburger Menu for Mobile */}
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </div>

    {/* Navigation Links */}
    <div
      className={`${
        isMenuOpen ? 'block ps-8' : 'hidden'
      } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
    >
      <a href="/" className="block md:ps-2 lg:px-6 py-2 text-black md:inline-block">
        Home
      </a>
      <a href="/products" className="block md:px-1 lg:px-6 py-2 text-gray-500 md:inline-block">
        Products
      </a>
      <a href="/about" className="block md:px-1 lg:px-6 py-2 text-gray-500 md:inline-block">
        About
      </a>
      <a href="/contact" className="block md:pe-2 lg:px-6 py-2 text-gray-500 md:inline-block">
        Contact
      </a>
    </div>

    {/* Auth Buttons */}
    <div className="hidden md:flex items-center space-x-4">
      <button className="flex items-center space-x-1 px-3 py-1 border border-gray-400 rounded-md hover:bg-gray-900 hover:text-white">
        <LogIn/>
        <span className='md:text-sm lg:text-base'>Login</span>
      </button>
      <button className="flex items-center space-x-1 px-3 py-1 border border-gray-400 rounded-md hover:bg-gray-900 hover:text-white">
        <UserPlus />
        <span className='md:text-sm lg:text-base'>Register</span>
      </button>
      <button className="flex items-center space-x-1 px-3 py-1 border border-gray-400 rounded-md hover:bg-gray-900 hover:text-white">
        <ShoppingCart />
        <span className=' md:text-sm lg:text-base'>Cart</span>
      </button>
    </div>
  </nav>

  )
}

export default Navbar
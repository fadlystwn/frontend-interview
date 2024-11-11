import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-black text-white p-6 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold uppercase">
          <Link href="/" className="text-yellow-300">
            Skateboard Heaven
          </Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#home" className="text-2xl hover:underline">
            Home
          </a>
          <a href="#shop" className="text-2xl hover:underline">
            Shop
          </a>
          <a href="#about" className="text-2xl hover:underline">
            About
          </a>
          <a href="#contact" className="text-2xl hover:underline">
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <MagnifyingGlassIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
          <UserCircleIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
          <ShoppingBagIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navigation

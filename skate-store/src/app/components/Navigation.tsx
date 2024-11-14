'use client'

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  return (
    <nav className="bg-black text-white p-6 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
          <Link href="/" className="text-yellow-300">
            Skateboard Heaven
          </Link>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
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
        <div className="flex gap-4 items-center">
          <MagnifyingGlassIcon
            className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer"
            onClick={toggleSearch}
          />
          <UserCircleIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />

          {/* Cart Icon with Badge */}
          <div className="relative">
            <ShoppingBagIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </div>

          {/* Hamburger Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Search Input */}
      {searchOpen && (
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white p-2 rounded w-full md:w-1/2"
          />
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start bg-black p-4 space-y-4">
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
      )}
    </nav>
  )
}

export default Navigation

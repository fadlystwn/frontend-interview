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

  const toggleMenu = () => setMenuOpen(!menuOpen)

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
        <div className="flex gap-4">
          <MagnifyingGlassIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
          <UserCircleIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
          <ShoppingBagIcon className="h-8 w-8 text-white hover:text-yellow-300 cursor-pointer" />
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

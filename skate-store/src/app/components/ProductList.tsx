'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Filters from './product-list/Filter'

// Main ProductList Component
const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Skateboard A',
      price: 120,
      color: 'Red',
      category: 'Street',
      seller: 'Seller A',
      available: true,
      rating: 4,
      imgUrl: '/images/skateboard-a.jpg',
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSeller, setSelectedSeller] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 200])
  const [availability, setAvailability] = useState<string | null>(null)
  const [rating, setRating] = useState<number | null>(null)

  // Filter products based on the selected filters
  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedSeller || product.seller === selectedSeller) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (availability === null ||
        (availability === 'Available' && product.available)) &&
      (rating === null || product.rating >= rating)
  )

  return (
    <div className="flex p-6 gap-6">
      {/* Filters Sidebar */}
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        availability={availability}
        setAvailability={setAvailability}
        rating={rating}
        setRating={setRating}
      />

      {/* Product Grid */}
      <section className="w-3/4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={product.imgUrl}
                alt={product.name}
                width={240}
                height={320}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Seller: {product.seller}</p>
              <p className="text-gray-500">Rating: {product.rating} Stars</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductList

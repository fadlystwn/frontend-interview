// src/components/FeaturedProducts.tsx
import React from 'react'

const FeaturedProducts: React.FC = () => {
  const products = [
    { name: 'Classic Deck', price: '$50' },
    { name: 'Speed Wheels', price: '$30' },
    { name: 'Trick Trucks', price: '$40' },
  ]

  return (
    <section className="p-10">
      <h2 className="text-4xl mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-4 border-black p-4 bg-white text-black hover:bg-yellow-300"
          >
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-xl">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts

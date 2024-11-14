// src/components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="mt-24 p-10 text-center">
      <h1 className="text-6xl font-bold uppercase">Skateboard Heaven</h1>
      <p className="text-2xl mt-4">Unleash Your Ride.</p>
      <button className="mt-8 px-6 py-2 bg-yellow-300 text-black font-bold">
        Shop Now
      </button>
    </section>
  )
}

export default Hero

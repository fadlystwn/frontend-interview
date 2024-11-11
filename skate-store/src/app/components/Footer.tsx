// src/components/Footer.tsx
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="p-10 bg-black text-white text-center">
      <p className="text-sm">
        &copy; 2024 Skateboard Heaven. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="/" className="underline hover:no-underline">
          Instagram
        </Link>
        <Link href="/" className="underline hover:no-underline">
          Facebook
        </Link>
        <Link href="/" className="underline hover:no-underline">
          Twitter
        </Link>
      </div>
    </footer>
  )
}

export default Footer

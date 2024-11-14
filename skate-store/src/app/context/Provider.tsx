'use client'

import { createContext } from 'react'

export const ProductContext = createContext({})

export default function ProductProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProductContext.Provider value="dark">{children}</ProductContext.Provider>
  )
}

export interface ProductSkateboard {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'Skateboard'
  deckSize: string
  wheelMaterial: 'Urethane' | 'Rubber'
  color: string
  weight: number
  stockQuantity: number
  status: 'Available' | 'Out of Stock' | 'Discontinued'
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

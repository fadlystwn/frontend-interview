// Filter Component
interface FiltersProps {
  selectedCategory: string | null
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>
  selectedSeller: string | null
  setSelectedSeller: React.Dispatch<React.SetStateAction<string | null>>
  priceRange: [number, number]
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>
  availability: string | null
  setAvailability: React.Dispatch<React.SetStateAction<string | null>>
  rating: number | null
  setRating: React.Dispatch<React.SetStateAction<number | null>>
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSeller,
  setSelectedSeller,
  priceRange,
  setPriceRange,
  availability,
  setAvailability,
  rating,
  setRating,
}) => {
  return (
    <aside className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-semibold">Filter by Category</h3>
        <ul className="space-y-2 mt-2">
          <li>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`block text-left w-full ${!selectedCategory ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              All Categories
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory('Street')}
              className={`block text-left w-full ${selectedCategory === 'Street' ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              Street
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory('Cruiser')}
              className={`block text-left w-full ${selectedCategory === 'Cruiser' ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              Cruiser
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory('Electric')}
              className={`block text-left w-full ${selectedCategory === 'Electric' ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              Electric
            </button>
          </li>
        </ul>
      </div>

      {/* Seller Filter */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Filter by Seller</h3>
        <ul className="space-y-2 mt-2">
          <li>
            <button
              onClick={() => setSelectedSeller(null)}
              className={`block text-left w-full ${!selectedSeller ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              All Sellers
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSeller('Seller A')}
              className={`block text-left w-full ${selectedSeller === 'Seller A' ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              Seller A
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSeller('Seller B')}
              className={`block text-left w-full ${selectedSeller === 'Seller B' ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
            >
              Seller B
            </button>
          </li>
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Filter by Price</h3>
        <p className="text-sm text-gray-500">
          ${priceRange[0]} - ${priceRange[1]}
        </p>
        <input
          type="range"
          min="100"
          max="200"
          step="10"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          className="w-full mt-2"
        />
        <input
          type="range"
          min="100"
          max="200"
          step="10"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full mt-2"
        />
      </div>

      {/* Availability Filter */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Filter by Availability</h3>
        <button
          onClick={() =>
            setAvailability(availability === 'Available' ? null : 'Available')
          }
          className={`block text-left w-full ${availability === 'Available' ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
        >
          Available
        </button>
      </div>

      {/* Rating Filter */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Filter by Rating</h3>
        <select
          value={rating || ''}
          onChange={(e) => setRating(Number(e.target.value) || null)}
          className="w-full mt-2 p-2 border"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Star & Up</option>
        </select>
      </div>
    </aside>
  )
}

export default Filters

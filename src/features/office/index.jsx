import { ChevronRight } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { Plus } from "lucide-react"
import { Heart } from "lucide-react"
import { CircleCheck } from "lucide-react"
import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"

const OFFICE_PRODUCTS = [
  {
    id: "kanso-task-chair",
    name: "Kanso Ergonomic Task Chair",
    subCategory: "Task Seating",
    subCategoryKey: "seating",
    price: 780,
    formattedPrice: "$780",
    image: "/images/img_04.jpg",
    dataAlt: "Minimalist ergonomic task chair in muted sage fabric with brushed aluminum base.",
    colors: ["#5D6B60", "#1A1A1A"],
    isNew: true,
    rating: 4.9,
    popularity: 98
  },
  {
    id: "aura-desk-lamp",
    name: "Aura Architectural Desk Lamp",
    subCategory: "Lighting",
    subCategoryKey: "lighting",
    price: 195,
    formattedPrice: "$195",
    image: "/images/img_17.jpg",
    dataAlt: "Sleek, minimalist desk lamp with slender arm and matte finish.",
    colors: ["#1A1A1A", "#E5E5E5"],
    isNew: false,
    rating: 4.8,
    popularity: 95
  },
  {
    id: "solid-oak-executive-desk",
    name: "Forma Minimalist Oak Desk",
    subCategory: "Desks",
    subCategoryKey: "desks",
    price: 1450,
    formattedPrice: "$1,450",
    image: "/images/img_18.jpg",
    dataAlt: "Solid white oak executive desk with chamfered edges and integrated discreet cable route.",
    colors: ["#C2B280", "#1A1A1A"],
    isNew: false,
    rating: 5.0,
    popularity: 91
  },
  {
    id: "brass-desk-tray-trio",
    name: "Brushed Brass Catchall Tray",
    subCategory: "Accessories",
    subCategoryKey: "accessories",
    price: 95,
    formattedPrice: "$95",
    image: "/images/img_03.jpg",
    dataAlt: "Heavyweight brushed brass desk organizer tray set.",
    colors: ["#8C5A4C", "#C2B280"],
    isNew: false,
    rating: 4.7,
    popularity: 82
  },
  {
    id: "lucent-study-lamp",
    name: "Lucent Counterbalance Lamp",
    subCategory: "Lighting",
    subCategoryKey: "lighting",
    price: 320,
    formattedPrice: "$320",
    image: "/images/img_09.jpg",
    dataAlt: "Minimalist task lamp with weighted stone base.",
    colors: ["#1A1A1A", "#E5E5E5"],
    isNew: true,
    rating: 4.9,
    popularity: 89
  },
  {
    id: "koto-low-credenza",
    name: "Koto Modular Office Credenza",
    subCategory: "Storage",
    subCategoryKey: "storage",
    price: 980,
    formattedPrice: "$980",
    image: "/images/img_02.jpg",
    dataAlt: "Minimalist low credenza with push-to-open fluted timber doors.",
    colors: ["#1A1A1A", "#C2B280"],
    isNew: false,
    rating: 4.9,
    popularity: 84
  }
]

const OFFICE_CATEGORIES = [
  { id: "all", label: "All Workspace" },
  { id: "desks", label: "Desks & Tables" },
  { id: "seating", label: "Task Seating" },
  { id: "lighting", label: "Desk Lighting" },
  { id: "storage", label: "Office Storage" },
  { id: "accessories", label: "Desk Accessories" }
]

const Office = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [maxPrice, setMaxPrice] = useState(2000)
  const [sortBy, setSortBy] = useState("newest")
  const [wishlist, setWishlist] = useState(new Set())
  const [addedPopup, setAddedPopup] = useState(null)

  const toggleWishlist = (id, e) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlist(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleQuickAdd = (product, e) => {
    e.preventDefault()
    e.stopPropagation()
    setAddedPopup(product.name)
    setTimeout(() => setAddedPopup(null), 2500)
  }

  const filteredProducts = useMemo(() => {
    return OFFICE_PRODUCTS.filter(p => {
      if (selectedCategory !== "all" && p.subCategoryKey !== selectedCategory) {
        return false
      }
      if (p.price > maxPrice) {
        return false
      }
      return true
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      return b.popularity - a.popularity
    })
  }, [selectedCategory, maxPrice, sortBy])

  return (
    <div className="min-h-screen bg-background text-on-background">
      {addedPopup && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <span className="text-[20px]"><CircleCheck /></span>
          <span className="font-label-sm text-label-sm">Added <strong>{addedPopup}</strong> to cart</span>
        </div>
      )}

      {/* Hero Header */}
      <section className="border-b border-outline-variant/30 bg-surface-container-low pt-28 pb-12 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-4 flex items-center text-caption text-on-surface-variant">
            <Link className="transition-colors hover:text-primary" to="/">
              Home
            </Link>
              <ChevronRight className="mx-1" size={18} />
            <span className="font-medium text-on-surface">Office</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-h1 md:text-display text-primary mb-3">
              Modern Workspace
            </h1>
            <p className="font-body-large text-body-large text-on-surface-variant">
              Engineered for deep work, ergonomic clarity, and quiet precision. Essentials tailored to bring domestic harmony to your daily focus.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="mx-auto flex w-full max-w-7xl grow gap-8 px-6 py-12 lg:px-12">
        {/* Filter Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium text-on-surface">
                Workspace Type
              </h3>
              <ul className="space-y-3">
                {OFFICE_CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <label className="group flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="h-5 w-5 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary/20"
                      />
                      <span className={`text-body-base transition-colors group-hover:text-primary ${selectedCategory === cat.id ? "font-semibold text-primary" : "text-on-surface-variant"}`}>
                        {cat.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 border-b border-outline-variant/30 pb-2">
                <h3 className="font-body-large text-body-large font-medium text-on-surface">Price Range</h3>
                <span className="font-label-sm text-label-sm text-primary font-semibold">${maxPrice}</span>
              </div>
              <input
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-variant accent-primary"
                max="2000"
                min="90"
                step="50"
                type="range"
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="w-full grow">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-body-base text-on-surface-variant font-medium">
              Showing {filteredProducts.length} workspace items
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-low py-2 pr-10 pl-4 font-label-sm text-label-sm text-on-surface focus:border-primary focus:outline-none"
              >
                <option value="newest">Featured Items</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-on-surface-variant text-[20px]">
                <ChevronDown size={18} />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => {
              const isFavorited = wishlist.has(product.id)
              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                    <img
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-alt={product.dataAlt}
                      src={product.image}
                      loading="lazy"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 rounded-md bg-secondary-container px-2.5 py-1 text-caption font-medium text-on-secondary-container">
                        New
                      </div>
                    )}
                    <button
                      onClick={e => toggleWishlist(product.id, e)}
                      className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest/80 text-on-surface-variant shadow-sm backdrop-blur transition-colors hover:text-red-500"
                    >
                      <span
                        className=" text-[20px]"
                        style={{
                          fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0",
                          color: isFavorited ? "#ba1a1a" : "inherit",
                        }}
                      >
                        <Heart fill={ isFavorited ? "#ba1a1a" : "none"} />
                      </span>
                    </button>
                  </div>
                  <div className="flex grow flex-col p-5">
                    <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase font-medium">
                      {product.subCategory}
                    </div>
                    <h3 className="mb-2 line-clamp-1 font-body-large text-body-large font-medium text-on-surface">
                      {product.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        {product.formattedPrice}
                      </span>
                      <button
                        onClick={e => handleQuickAdd(product, e)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-primary transition-all hover:bg-primary hover:text-on-primary"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Office;

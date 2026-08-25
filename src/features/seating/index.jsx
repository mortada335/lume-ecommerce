import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"

const SEATING_PRODUCTS = [
  {
    id: "kanso-lounge-chair",
    name: "Kanso Lounge Chair",
    type: "Lounge Chairs",
    typeKey: "lounge",
    material: "Sage Wool Blend / Solid Ash",
    price: 895,
    formattedPrice: "$895",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPC_qafLdLqsVvBIu1U0X9iXSu-sa517Fvuk4f13I3DEr_zl0Q0bIP6J-8a509Ik6YWJhfa6bpCCsSULFxbqgnbjnqlq3knOmdLriqAy7x4tR_MqGmcfL0BaXHPddNfSY2LgEyjlshXjWt_V75_qXIKJYETeApPO-2206UdcRcDdRtacEiV5EXxGc0CZlNLe1dGIvvTCJ4syuOM7HdZCwuGR9pZXmhX_uSN8GU_N4Wd9HwdtKQL07RQTPT7g3kD2rKAUtD0hgcpOw",
    dataAlt: "Mid-century modern lounge chair upholstered in a muted sage fabric with architectural joinery.",
    colors: ["#5D6B60", "#E5E5E5"],
    isNew: false,
    rating: 4.9,
    popularity: 99
  },
  {
    id: "aura-lounge-chair",
    name: "Aura Boucle Lounge Chair",
    type: "Lounge Chairs",
    typeKey: "lounge",
    material: "Textured Boucle / Walnut",
    price: 1250,
    formattedPrice: "$1,250",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1WqMv8GGESvR5xMcJkjqfCDKik2eJIYnZH3lRqFSR0nZxdQh-n761bW5Chd68icjTJ7bKNkjTcQjXI4SFOSzT5IplHYr1DyznZqNP9KnSSWLnd4-BGxahfuB_mMQoXHD3rNVSccWe3l_63cttQEvZxDhOQLuoiecza7FvAocO56CTHLWAe4pbKpSQc2mIxRO4XTlPrE_JRXsZrkJGUlLW0SaZSLkQ472g_WAAlH1P4Agzlw3zc5Iztwxc-GIrkrqldl6IYIiSR04",
    dataAlt: "Minimalist lounge chair featuring a solid oak frame and textured linen upholstery.",
    colors: ["#E5E5E5", "#C2B280"],
    isNew: true,
    rating: 5.0,
    popularity: 97
  },
  {
    id: "koto-low-chair",
    name: "Koto Low Accent Chair",
    type: "Accent Chairs",
    typeKey: "accent",
    material: "Off-White Woven / Matte Steel",
    price: 1150,
    formattedPrice: "$1,150",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNuswt3-HjBE989apN6g0YxKpCnjcDeVDK1ct-3hUHZgKZ3btDWtpzSQkroBFDxXehVsrknKfiQJ4ueL8GqUDcmCzmzfsPh0Tqb5uXadLE2eS8BfIh3DSDTEy5dhJYMbwRn3CnA4lPloAPfRvFOCZC147EeCyutOxfkUEv7odimrUoqvIMKOpF0A2P17Sd_1P7szPx9a-RiRHEOI0iIJf-NQ56M7uBQLc_zF9t17hsNUQseygAwYiuSd1umfOSMx0HhSxSccjc89o",
    dataAlt: "Low-profile accent chair upholstered in a textured fabric placed against a minimalist wall.",
    colors: ["#E5E5E5", "#1A1A1A"],
    isNew: false,
    rating: 4.8,
    popularity: 92
  },
  {
    id: "muto-oak-dining-chair",
    name: "Muto Handcrafted Dining Chair",
    type: "Dining Chairs",
    typeKey: "dining",
    material: "Solid European Oak",
    price: 420,
    formattedPrice: "$420",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCID4AfHfOH-ebEoTt5XK0UXPMnDmje9ZPwQfCc3BhiyaKUux7W8Q6asu-AcYYgBLMQy8sybXvE3HD7i5pS32R34zusK1BoPMrGlhXi-9whEbfo2Ect9B5KGxU0PsF1jolTpUahxI937DE6ZXFyL-YQHWBOe_DQp9OlbYxXPiYiuAMmhSVa5DwmGeLKE0EUeRuRt78mGN6zfLsGuaerRMCNN2kYLNpfdDXn808VMxS9RCrr0DhnOXt6bti0YKzd-Dqs3DwyzmZPKJ0",
    dataAlt: "Close-up of a modern, handcrafted oak dining chair positioned next to a dining table.",
    colors: ["#C2B280", "#1A1A1A"],
    isNew: false,
    rating: 4.9,
    popularity: 90
  }
]

const SEATING_TYPES = [
  { id: "all", label: "All Seating" },
  { id: "lounge", label: "Lounge Chairs" },
  { id: "dining", label: "Dining Chairs" },
  { id: "accent", label: "Accent Armchairs" }
]

const Seating = () => {
  const [selectedType, setSelectedType] = useState("all")
  const [maxPrice, setMaxPrice] = useState(1500)
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
    return SEATING_PRODUCTS.filter(p => {
      if (selectedType !== "all" && p.typeKey !== selectedType) {
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
  }, [selectedType, maxPrice, sortBy])

  return (
    <div className="min-h-screen bg-background text-on-background">
      {addedPopup && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
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
            <span className="material-symbols-outlined mx-1 text-[14px]">chevron_right</span>
            <span className="font-medium text-on-surface">Seating</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-h1 md:text-display text-primary mb-3">
              Curated Seating
            </h1>
            <p className="font-body-large text-body-large text-on-surface-variant">
              Every curve, angle, and joinery method is designed for domestic harmony and postural ease. Built from FSC-certified hardwoods and tactile textiles.
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
                Seating Category
              </h3>
              <ul className="space-y-3">
                {SEATING_TYPES.map(cat => (
                  <li key={cat.id}>
                    <label className="group flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedType === cat.id}
                        onChange={() => setSelectedType(cat.id)}
                        className="h-5 w-5 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary/20"
                      />
                      <span className={`text-body-base transition-colors group-hover:text-primary ${selectedType === cat.id ? "font-semibold text-primary" : "text-on-surface-variant"}`}>
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
                max="1500"
                min="300"
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
              Showing {filteredProducts.length} seating pieces
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-low py-2 pr-10 pl-4 font-label-sm text-label-sm text-on-surface focus:border-primary focus:outline-none"
              >
                <option value="newest">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-on-surface-variant text-[20px]">
                expand_more
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
                        className="material-symbols-outlined text-[20px]"
                        style={{
                          fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0",
                          color: isFavorited ? "#ba1a1a" : "inherit"
                        }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                  <div className="flex grow flex-col p-5">
                    <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase font-medium">
                      {product.material}
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
                        <span className="material-symbols-outlined text-[18px]">add</span>
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

export default Seating

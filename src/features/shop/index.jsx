import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"

const PRODUCTS = [
  {
    id: "kanso-lounge-chair",
    name: "Kanso Lounge Chair",
    category: "Seating",
    categoryKey: "seating",
    price: 895,
    formattedPrice: "$895",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPC_qafLdLqsVvBIu1U0X9iXSu-sa517Fvuk4f13I3DEr_zl0Q0bIP6J-8a509Ik6YWJhfa6bpCCsSULFxbqgnbjnqlq3knOmdLriqAy7x4tR_MqGmcfL0BaXHPddNfSY2LgEyjlshXjWt_V75_qXIKJYETeApPO-2206UdcRcDdRtacEiV5EXxGc0CZlNLe1dGIvvTCJ4syuOM7HdZCwuGR9pZXmhX_uSN8GU_N4Wd9HwdtKQL07RQTPT7g3kD2rKAUtD0hgcpOw",
    dataAlt: "A minimalist living room setting featuring a mid-century modern lounge chair upholstered in a muted sage fabric.",
    colors: ["#E5E5E5", "#5D6B60"],
    isNew: false,
    rating: 4.9,
    dateAdded: "2024-05-01",
    popularity: 98
  },
  {
    id: "aura-table-lamp",
    name: "Aura Table Lamp",
    category: "Lighting",
    categoryKey: "lighting",
    price: 245,
    formattedPrice: "$245",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4TRg7SlKeVCELFjUAFWYm00g2D0xC65AiqoS9KhGnBzNrj94jE3_kVH8pvsdWGiLi54cPcyqGcT7VxKOJY9UFotaMaXcMWIr-87UStEhFnqzbCJqWjFHiWDZf-UT9kT2TAClBxoGgiAqiySkY-RwC1OWrZ6HYC4zpcZpDuZS7kviBg2bXchWPvSoHqZK96ek3dUtCQADEUHkaWYWKsqGm_J9cOf9sN6-pxAmx4jz14mKxpVuZs7eV53kSZ7i4hsrmAo7tQ6jku7w",
    dataAlt: "A close-up shot of an elegant, sculptural ceramic table lamp resting on a light oak side table.",
    colors: ["#E5E5E5", "#1A1A1A"],
    isNew: true,
    rating: 4.8,
    dateAdded: "2024-06-15",
    popularity: 92
  },
  {
    id: "forma-dining-table",
    name: "Forma Dining Table",
    category: "Tables",
    categoryKey: "tables",
    price: 1250,
    formattedPrice: "$1,250",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVxwftUQF0HcB0r4fep3gcOaYzpn1IVmZK9PTGeOtuPJigWCUV8-0YO1p6lmr1UcMUJGKVTS7kvUOJvWNTWIaZsoGRQovnuEVGw79eECZU0nKNhDtCwCVFn5feb24VXPqSTj0hAc66BaF-RB5VFqbbM30H7ULxc4D_dXVSuIguhG33-NEa_IuHQzaxtJs2wpP7RNo9O8THO1x0HwRIRvGIbUhhCJ7feZJkhhQset4_mgvCpLMmoBY0-2-RkbLCgTPDj5X9F_kNIk0",
    dataAlt: "A clean, highly curated dining setting showcasing a solid ash wood dining table with a smooth, minimalist profile.",
    colors: ["#C2B280", "#1A1A1A"],
    isNew: false,
    rating: 5.0,
    dateAdded: "2024-04-10",
    popularity: 88
  },
  {
    id: "terra-vase-trio",
    name: "Terra Vase Trio",
    category: "Decor",
    categoryKey: "decor",
    price: 120,
    formattedPrice: "$120",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi3S7tzh1jFyBgHn62LDWo9-X9mhEYuoRDAEQ_heKFxxQIeojNf2qP5eJs6tDUo0XUoqBt5HFgo46f3SRBV6wAL3N5cafrdHYKk0VY1h1DC80Hp_Dk5Bug5n-bUrjNisZvb-uNJfcbwc542lIoruf_kTyVFxHLi388ObrJLy-ZWJfeU_v5ux4KWwj3uUqKcz8csdEN_4JjBh2l2elJofyk0vu5ixU5M_NQvBY4Ww7u0-R5eP3rgsDv1Apttda7IX-nhRFR_tN9Ah4",
    dataAlt: "A curated display of modern home decor accessories, including a matte terracotta vase holding a single dried branch.",
    colors: ["#8C5A4C", "#C2B280"],
    isNew: false,
    rating: 4.7,
    dateAdded: "2024-03-20",
    popularity: 85
  },
  {
    id: "lucent-floor-lamp",
    name: "Lucent Floor Lamp",
    category: "Lighting",
    categoryKey: "lighting",
    price: 450,
    formattedPrice: "$450",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2iVYeSUf-Tq-B4eZWIts2xc8nbuNoA0_mOZvbG7sUH5GO6dB5nYjx9zwwbiiHSa3OatjxcVqKBZq7f4yMYvjaBXezkfjSSZrpEerrBbxvoKu-ScVSxyq73JyfDOthW2CAUCNkNbQ34B4fR__NLfHF09hWBMSGQKtIXgR-amQLrEGo56hNGWqZ-K3dAPGSHLSXjlb60gbz_AAi5PflvtJtXFFMKRdjUPgaJ9A1Qu9okAF5WNbrimxWac7o3oIae7mn_cnkvqjdBWY",
    dataAlt: "A sleek, modern minimalist floor lamp in a serene living room setting.",
    colors: ["#1A1A1A", "#b89947", "#d8dbd7"],
    isNew: true,
    rating: 4.9,
    dateAdded: "2024-06-01",
    popularity: 99
  },
  {
    id: "cove-coffee-table",
    name: "Cove Coffee Table",
    category: "Tables",
    categoryKey: "tables",
    price: 650,
    formattedPrice: "$650",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCixSA6ULhznH5vNEvt46ym64VbWS2e8EEvbCfNHtNQsf-XNVf_NfMsXsg0mFj6WGTvEuohhDCplxufT3vlXGskASvv-xj9LwwEhSgldmym7uYRzrH4vSdR3QYddkJLOMqWakLAHiqwxssk0Fns2t45VAqlwFLYVbtpVRqaazJ3cmxHy95aXBcayCgUUbjYuIvjBH28cm__rlLFaIFXo8whHR9wFF9EsXG0KMRbZcZKGIuWAsqkwmW5zvA_oPue4328I1GpAqiBPQg",
    dataAlt: "A high-fidelity image of a low-profile, solid walnut coffee table sitting on a light cream textured rug.",
    colors: ["#1A1A1A", "#C2B280"],
    isNew: false,
    rating: 4.8,
    dateAdded: "2024-04-18",
    popularity: 87
  },
  {
    id: "oasis-ceramic-vase",
    name: "Oasis Ceramic Vase",
    category: "Decor",
    categoryKey: "decor",
    price: 120,
    formattedPrice: "$120",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbq9ymHd8q2_5bdmEeR-kgO6PPqS43cq56T9df5FnvrxYb7nlP7uW-68JdjlzIFZn6utC55nMBYg323m_foNRvQjkxvZ3uceQ-YB9iZqUmc-zJrORwr0_sxB3jcayyvr8r-VkjJjXNH9L8x0sFUGtBfH12joWuF9gw3l8327sUwHVSqla03lEYA3WnRybPkT2NlO_P9FELLIAp9A3VHrnOEn88fhfOeK1vSEagR8sV7i6HT1ResKI86JLdk1HpUQr0RYU5PhrlaQ8",
    dataAlt: "A close-up shot of a handcrafted, matte white ceramic vase standing alone on a smooth stone pedestal.",
    colors: ["#E5E5E5", "#C2B280"],
    isNew: false,
    rating: 4.9,
    dateAdded: "2024-05-12",
    popularity: 91
  },
  {
    id: "koto-low-chair",
    name: "Koto Low Lounge Chair",
    category: "Seating",
    categoryKey: "seating",
    price: 1150,
    formattedPrice: "$1,150",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNuswt3-HjBE989apN6g0YxKpCnjcDeVDK1ct-3hUHZgKZ3btDWtpzSQkroBFDxXehVsrknKfiQJ4ueL8GqUDcmCzmzfsPh0Tqb5uXadLE2eS8BfIh3DSDTEy5dhJYMbwRn3CnA4lPloAPfRvFOCZC147EeCyutOxfkUEv7odimrUoqvIMKOpF0A2P17Sd_1P7szPx9a-RiRHEOI0iIJf-NQ56M7uBQLc_zF9t17hsNUQseygAwYiuSd1umfOSMx0HhSxSccjc89o",
    dataAlt: "An elegant, low-profile lounge chair upholstered in a light, textured fabric.",
    colors: ["#E5E5E5", "#5D6B60", "#1A1A1A"],
    isNew: true,
    rating: 5.0,
    dateAdded: "2024-06-20",
    popularity: 96
  }
]

const CATEGORIES = [
  { id: "all", label: "All Furniture" },
  { id: "seating", label: "Seating" },
  { id: "tables", label: "Tables" },
  { id: "lighting", label: "Lighting" },
  { id: "decor", label: "Decor" }
]

const COLOR_OPTIONS = [
  { id: "grey", name: "Light Grey", hex: "#E5E5E5" },
  { id: "charcoal", name: "Charcoal", hex: "#1A1A1A" },
  { id: "sand", name: "Sand", hex: "#C2B280" },
  { id: "sage", name: "Sage", hex: "#5D6B60" },
  { id: "terracotta", name: "Terracotta", hex: "#8C5A4C" }
]

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [maxPrice, setMaxPrice] = useState(1500)
  const [selectedColor, setSelectedColor] = useState(null)
  const [sortBy, setSortBy] = useState("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [wishlist, setWishlist] = useState(new Set(["terra-vase-trio"]))
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
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
    return PRODUCTS.filter(p => {
      // Category filter
      if (selectedCategory !== "all" && p.categoryKey !== selectedCategory) {
        return false
      }
      // Price filter
      if (p.price > maxPrice) {
        return false
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase()
        if (!p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) {
          return false
        }
      }
      return true
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      if (sortBy === "popular") return b.popularity - a.popularity
      return new Date(b.dateAdded) - new Date(a.dateAdded)
    })
  }, [selectedCategory, maxPrice, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Toast Notification */}
      {addedPopup && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span className="font-label-sm text-label-sm">Added <strong>{addedPopup}</strong> to cart</span>
        </div>
      )}

      <main className="mx-auto flex w-full max-w-7xl grow gap-8 px-6 pt-28 pb-16 lg:px-12">
        {/* Sidebar Filter (Desktop) */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28 space-y-8">
            {/* Search */}
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
              <input
                type="text"
                placeholder="Filter catalog..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-body-base text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-on-surface-variant hover:text-primary">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium text-on-surface">
                Categories
              </h3>
              <ul className="space-y-3">
                {CATEGORIES.map(cat => (
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

            {/* Price Range */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-outline-variant/30 pb-2">
                <h3 className="font-body-large text-body-large font-medium text-on-surface">Price Range</h3>
                <span className="font-label-sm text-label-sm text-primary font-semibold">${maxPrice}</span>
              </div>
              <div className="space-y-4">
                <input
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-variant accent-primary"
                  max="1500"
                  min="50"
                  step="25"
                  type="range"
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                />
                <div className="flex items-center justify-between gap-4">
                  <div className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-3 py-2">
                    <span className="mb-1 block text-caption text-on-surface-variant">Min</span>
                    <span className="text-body-base font-medium text-on-surface">$0</span>
                  </div>
                  <span className="text-on-surface-variant">-</span>
                  <div className="w-full rounded-lg border border-outline-variant/30 bg-surface-container-low px-3 py-2">
                    <span className="mb-1 block text-caption text-on-surface-variant">Max</span>
                    <span className="text-body-base font-medium text-on-surface">${maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium text-on-surface">
                Colors
              </h3>
              <div className="flex flex-wrap gap-3">
                {COLOR_OPTIONS.map(color => {
                  const isSelected = selectedColor === color.id
                  return (
                    <button
                      key={color.id}
                      aria-label={color.name}
                      title={color.name}
                      onClick={() => setSelectedColor(isSelected ? null : color.id)}
                      style={{ backgroundColor: color.hex }}
                      className={`h-8 w-8 rounded-full transition-all ${
                        isSelected ? "border-2 border-primary ring-2 ring-primary ring-offset-2" : "border-2 border-transparent hover:scale-105"
                      }`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedCategory !== "all" || maxPrice < 1500 || selectedColor !== null || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setMaxPrice(1500)
                  setSelectedColor(null)
                  setSearchQuery("")
                }}
                className="w-full py-2.5 rounded-lg border border-outline-variant/60 text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full grow">
          {/* Breadcrumbs & Toolbar */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <nav className="mb-2 flex items-center text-caption text-on-surface-variant">
                <Link className="transition-colors hover:text-primary" to="/">
                  Home
                </Link>
                <span className="material-symbols-outlined mx-1 text-[14px]">
                  chevron_right
                </span>
                <span className="font-medium text-on-surface">
                  {selectedCategory === "all" ? "Shop All" : CATEGORIES.find(c => c.id === selectedCategory)?.label}
                </span>
              </nav>
              <h1 className="font-h1 text-h1 text-on-surface">
                Modern Living Essentials
              </h1>
              <p className="mt-2 text-body-base text-on-surface-variant">
                Curated pieces for a quiet, intentional home. ({filteredProducts.length} items)
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-2 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container-low lg:hidden"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Filters
              </button>
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-low py-2.5 pr-10 pl-4 font-label-sm text-label-sm text-on-surface focus:border-primary focus:ring-primary focus:outline-none"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-outline-variant p-16 text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant/60 mb-2">search_off</span>
              <h3 className="font-h2 text-h2 text-on-surface mb-2">No products match your criteria</h3>
              <p className="text-body-base text-on-surface-variant mb-6">Try adjusting your filters or price range.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setMaxPrice(1500)
                  setSelectedColor(null)
                  setSearchQuery("")
                }}
                className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                        <div className="absolute top-4 left-4 rounded-md bg-secondary-container px-2.5 py-1 text-caption font-medium text-on-secondary-container shadow-xs">
                          New
                        </div>
                      )}
                      {/* Wishlist Button */}
                      <button
                        onClick={e => toggleWishlist(product.id, e)}
                        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest/80 text-on-surface-variant shadow-sm backdrop-blur transition-colors hover:text-red-500"
                        aria-label="Wishlist"
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
                      {/* Color Preview */}
                      {product.colors && product.colors.length > 0 && (
                        <div className="absolute bottom-4 left-4 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {product.colors.map((c, i) => (
                            <span
                              key={i}
                              style={{ backgroundColor: c }}
                              className="h-3.5 w-3.5 rounded-full border border-outline-variant/50 shadow-xs"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex grow flex-col p-5">
                      <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase font-medium">
                        {product.category}
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
                          title="Quick add to cart"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-primary transition-all hover:bg-primary hover:text-on-primary active:scale-95"
                        >
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2 border-t border-outline-variant/30 pt-8">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low disabled:opacity-50"
              disabled
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-body-base font-medium text-on-primary">
              1
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-body-base font-medium text-on-surface transition-colors hover:bg-surface-container-low">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-body-base font-medium text-on-surface transition-colors hover:bg-surface-container-low">
              3
            </button>
            <span className="mx-2 text-on-surface-variant">...</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-body-base font-medium text-on-surface transition-colors hover:bg-surface-container-low">
              8
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Shop

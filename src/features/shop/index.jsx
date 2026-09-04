import { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, Heart, Plus, CheckCircle, ChevronDown, X } from "lucide-react"
import { getProducts } from "@/services/api"
import useCartStore from "@/store/cartStore"

import SubHeader from "@/components/layouts/SubHeader"

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "workspace", label: "Workspace" },
  { id: "seating", label: "Seating" },
  { id: "lighting", label: "Lighting" },
  { id: "decor", label: "Decor" },
]

const COLOR_OPTIONS = [
  { id: "grey", name: "Light Grey", hex: "#E5E5E5" },
  { id: "charcoal", name: "Charcoal", hex: "#1A1A1A" },
  { id: "sand", name: "Sand", hex: "#C2B280" },
  { id: "sage", name: "Sage", hex: "#5D6B60" },
  { id: "terracotta", name: "Terracotta", hex: "#8C5A4C" },
]

const Shop = () => {
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [maxPrice, setMaxPrice] = useState(1500)
  const [selectedColor, setSelectedColor] = useState(null)
  const [sortBy, setSortBy] = useState("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [wishlist, setWishlist] = useState(new Set())
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [addedPopup, setAddedPopup] = useState(null)

  const { addItem } = useCartStore()

  useEffect(() => {
    getProducts()
      .then(setAllProducts)
      .finally(() => setLoading(false))
  }, [])

  const toggleWishlist = (id, e) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleQuickAdd = (product, e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    setAddedPopup(product.name)
    setTimeout(() => setAddedPopup(null), 2500)
  }

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => {
        if (selectedCategory !== "all" && p.category !== selectedCategory) return false
        if (p.price > maxPrice) return false
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase()
          if (!p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false
        }
        return true
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price
        if (sortBy === "price-desc") return b.price - a.price
        if (sortBy === "popular") return b.popularity - a.popularity
        return new Date(b.dateAdded) - new Date(a.dateAdded)
      })
  }, [allProducts, selectedCategory, maxPrice, searchQuery, sortBy])

  const resetFilters = () => {
    setSelectedCategory("all")
    setMaxPrice(1500)
    setSelectedColor(null)
    setSearchQuery("")
  }

  const hasActiveFilters = selectedCategory !== "all" || maxPrice < 1500 || selectedColor !== null || searchQuery
  const categoryLabel = CATEGORIES.find((c) => c.id === selectedCategory)?.label ?? "Shop All"

  return (
    <div className="min-h-screen bg-background text-on-background pt-20">
      {addedPopup && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle size={18} />
          <span className="font-label-sm text-label-sm">Added <strong>{addedPopup}</strong> to cart</span>
        </div>
      )}

      {/* Fixed-height Breadcrumb + Filter Section (h-14 / 56px) */}
      <SubHeader
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: categoryLabel },
        ]}
      >
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-caption text-on-surface-variant">
            {loading ? "Loading..." : `${filteredProducts.length} pieces`}
          </span>
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-1.5 rounded-lg border border-outline-variant/60 bg-surface-container-low px-3 py-1.5 font-label-sm text-label-sm text-on-surface hover:border-primary lg:hidden"
          >
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-low py-1.5 pr-8 pl-3 font-label-sm text-label-sm text-on-surface focus:border-primary focus:outline-none"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-on-surface-variant" />
          </div>
        </div>
      </SubHeader>

      <main className="mx-auto flex w-full max-w-7xl grow gap-8 px-6 pt-8 pb-16 lg:px-12">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-36 space-y-8">
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-3 flex items-center gap-2">
              <Search size={18} className="text-on-surface-variant shrink-0" />
              <input type="text" placeholder="Filter catalog..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent text-body-base text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none" />
              {searchQuery && (<button onClick={() => setSearchQuery("")} className="text-on-surface-variant hover:text-primary"><X size={16} /></button>)}
            </div>
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium text-on-surface">Categories</h3>
              <ul className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <label className="group flex cursor-pointer items-center gap-3">
                      <input type="checkbox" checked={selectedCategory === cat.id} onChange={() => setSelectedCategory(cat.id)} className="h-5 w-5 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary/20" />
                      <span className={`text-body-base transition-colors group-hover:text-primary ${selectedCategory === cat.id ? "font-semibold text-primary" : "text-on-surface-variant"}`}>{cat.label}</span>
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
              <input className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-variant accent-primary" max="1500" min="50" step="25" type="range" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
            </div>
            <div>
              <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-body-large text-body-large font-medium text-on-surface">Colors</h3>
              <div className="flex flex-wrap gap-3">
                {COLOR_OPTIONS.map((color) => {
                  const isSelected = selectedColor === color.id
                  return (<button key={color.id} aria-label={color.name} title={color.name} onClick={() => setSelectedColor(isSelected ? null : color.id)} style={{ backgroundColor: color.hex }} className={`h-8 w-8 rounded-full transition-all ${isSelected ? "border-2 border-primary ring-2 ring-primary ring-offset-2" : "border-2 border-transparent hover:scale-105"}`} />)
                })}
              </div>
            </div>
            {hasActiveFilters && (<button onClick={resetFilters} className="w-full py-2.5 rounded-lg border border-outline-variant/60 text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:border-primary transition-colors">Reset Filters</button>)}
          </div>
        </aside>

        <div className="w-full grow">
          <div className="mb-8">
            <h1 className="font-h1 text-h1 text-on-surface">Modern Living Essentials</h1>
            <p className="mt-2 text-body-base text-on-surface-variant">
              {loading ? "Loading collection..." : `Curated pieces for a quiet, intentional home.`}
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[0,1,2,3,4,5,6,7].map((i) => (
                <div key={i} className="animate-pulse rounded-2xl overflow-hidden border border-outline-variant/30">
                  <div className="aspect-4/5 bg-surface-container" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-16 rounded bg-surface-container" />
                    <div className="h-5 w-3/4 rounded bg-surface-container" />
                    <div className="h-4 w-1/3 rounded bg-surface-container" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-outline-variant p-16 text-center">
              <h3 className="font-h2 text-h2 text-on-surface mb-2">No products match</h3>
              <p className="text-body-base text-on-surface-variant mb-6">Try adjusting your filters or price range.</p>
              <button onClick={resetFilters} className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm">Reset All Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const isFavorited = wishlist.has(product.id)
                return (
                  <Link key={product.id} to={`/product/${product.id}`} className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                      <img alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.images[0]} loading="lazy" />
                      {product.isNew && (<div className="absolute top-4 left-4 rounded-md bg-secondary-container px-2.5 py-1 text-caption font-medium text-on-secondary-container shadow-xs">New</div>)}
                      <button onClick={(e) => toggleWishlist(product.id, e)} className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest/80 text-on-surface-variant shadow-sm backdrop-blur transition-colors hover:text-red-500" aria-label="Wishlist">
                        <Heart size={18} fill={isFavorited ? "#ba1a1a" : "none"} color={isFavorited ? "#ba1a1a" : "currentColor"} />
                      </button>
                      {product.colors?.length > 0 && (
                        <div className="absolute bottom-4 left-4 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {product.colors.map((c, i) => (<span key={i} style={{ backgroundColor: c }} className="h-3.5 w-3.5 rounded-full border border-outline-variant/50 shadow-xs" />))}
                        </div>
                      )}
                    </div>
                    <div className="flex grow flex-col p-5">
                      <div className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase font-medium capitalize">{product.category}</div>
                      <h3 className="mb-2 line-clamp-1 font-body-large text-body-large font-medium text-on-surface">{product.name}</h3>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">{product.formattedPrice}</span>
                        <button onClick={(e) => handleQuickAdd(product, e)} title="Quick add to cart" className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-primary transition-all hover:bg-primary hover:text-on-primary active:scale-95">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Shop

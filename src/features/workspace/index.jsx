import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, ArrowRight, Plus } from "lucide-react"
import { getProductsByCategory } from "@/services/api"
import useCartStore from "@/store/cartStore"

import SubHeader from "@/components/layouts/SubHeader"

const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
]

const Workspace = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("popular")
  const [toastProduct, setToastProduct] = useState(null)

  const { addItem } = useCartStore()

  useEffect(() => {
    getProductsByCategory("workspace")
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  const sorted = [...products].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "newest") return new Date(b.dateAdded) - new Date(a.dateAdded)
    return b.popularity - a.popularity
  })

  const featured = sorted[0]
  const rest = sorted.slice(1)

  const handleQuickAdd = (product, e) => {
    e.preventDefault()
    addItem(product, 1)
    setToastProduct(product.name)
    setTimeout(() => setToastProduct(null), 2500)
  }

  return (
    <div className="min-h-screen bg-background text-on-background pt-20">
      {/* Toast */}
      {toastProduct && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <span className="font-label-sm text-label-sm">Added <strong>{toastProduct}</strong> to cart</span>
        </div>
      )}

      {/* Fixed-height Breadcrumb + Filter Section (h-14 / 56px) */}
      <SubHeader
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Workspace" },
        ]}
      >
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-caption text-on-surface-variant">
            {loading ? "Loading..." : `${products.length} pieces`}
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-low py-1.5 pr-8 pl-3 font-label-sm text-label-sm text-on-surface focus:border-primary focus:outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronRight size={14} className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rotate-90 text-on-surface-variant" />
          </div>
        </div>
      </SubHeader>

      {/* Hero Banner */}
      <section className="relative flex min-h-[460px] w-full items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/img_01.jpg"
            alt="Workspace collection hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-12">
          <p className="mb-2 text-caption font-medium uppercase tracking-[0.2em] text-primary">
            Workspace Collection
          </p>
          <h1 className="font-display text-display text-on-surface leading-tight max-w-2xl">
            Designed for Work.<br />Built to Inspire.
          </h1>
          <p className="mt-4 font-body-large text-body-large text-on-surface-variant max-w-xl">
            Objects that earn their place on your desk. Each piece is chosen for how it performs over years, not just how it looks at first glance.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12">

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[0,1,2].map(i => (
              <div key={i} className="animate-pulse rounded-2xl bg-surface-container-low aspect-[4/5]" />
            ))}
          </div>
        ) : (
          <>
            {/* Editorial Layout: Featured large + grid */}
            {featured && (
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Featured Card — spans 2 cols, 2 rows */}
                <Link
                  to={`/product/${featured.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest border border-outline-variant/30 md:col-span-2 md:row-span-2 transition-all duration-300 hover:shadow-xl"
                  style={{ minHeight: "520px" }}
                >
                  <img
                    src={featured.images[0]}
                    alt={featured.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="mb-2 inline-block rounded-full bg-primary/90 px-3 py-1 text-caption font-semibold text-on-primary">
                      Editor's Pick
                    </span>
                    <h2 className="font-h1 text-h1 text-white mb-2">{featured.name}</h2>
                    <p className="font-body-base text-body-base text-white/80 mb-4 max-w-sm line-clamp-2">{featured.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-h2 text-h2 text-white">{featured.formattedPrice}</span>
                      <span className="flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur px-4 py-2 text-label-sm font-label-sm text-white transition-all group-hover:bg-white/30">
                        View Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Side Cards */}
                <div className="flex flex-col gap-6 md:row-span-2">
                  {rest.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex-1"
                    >
                      <div className="relative overflow-hidden bg-surface-container-low" style={{ aspectRatio: "16/9" }}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {product.isNew && (
                          <div className="absolute top-3 left-3 rounded-full bg-secondary-container px-2.5 py-0.5 text-caption font-medium text-on-secondary-container">
                            New
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between p-5">
                        <div>
                          <p className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Workspace</p>
                          <h3 className="font-body-large text-body-large font-medium text-on-surface">{product.name}</h3>
                          <span className="font-label-sm text-label-sm font-semibold text-primary mt-1 block">{product.formattedPrice}</span>
                        </div>
                        <button
                          onClick={(e) => handleQuickAdd(product, e)}
                          title="Quick add"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary transition-all hover:bg-primary hover:text-on-primary active:scale-95"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA to full shop */}
        <div className="mt-12 flex items-center justify-center">
          <Link
            to="/shop"
            className="flex items-center gap-2 rounded-xl border border-outline-variant/50 px-8 py-4 font-label-sm text-label-sm text-on-surface-variant transition-all hover:border-primary hover:text-primary"
          >
            Browse full collection <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Workspace

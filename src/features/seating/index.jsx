import { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import { Star, Plus, Eye } from "lucide-react"
import { getProductsByCategory } from "@/services/api"
import useCartStore from "@/store/cartStore"
import SubHeader from "@/components/layouts/SubHeader"

const SUB_FILTERS = [
  { id: "all", label: "All Seating" },
  { id: "lounge", label: "Lounge" },
  { id: "dining", label: "Dining" },
]

const Seating = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [subFilter, setSubFilter] = useState("all")
  const [toastProduct, setToastProduct] = useState(null)

  const { addItem } = useCartStore()

  useEffect(() => {
    getProductsByCategory("seating")
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = useMemo(() => {
    if (subFilter === "all") return products
    return products.filter((p) => {
      const q = subFilter.toLowerCase()
      return (
        p.name.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category?.toLowerCase() === q
      )
    })
  }, [products, subFilter])

  const handleAddToCart = (product, e) => {
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
          { label: "Seating" },
        ]}
      >
        <div className="flex items-center gap-1.5 sm:gap-2">
          {SUB_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setSubFilter(f.id)}
              className={`rounded-full px-3.5 py-1 text-label-sm font-label-sm transition-all shrink-0 ${
                subFilter === f.id
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </SubHeader>

      <main className="mx-auto max-w-7xl px-6 lg:px-12 pb-20">
        {/* Page title / Hero */}
        <div className="pt-8 pb-8 md:pt-10 md:pb-8">
          <p className="mb-2 text-caption font-medium uppercase tracking-[0.2em] text-primary">
            Seating Collection
          </p>
          <h1 className="font-display text-display text-on-surface">Seating Collection</h1>
          <p className="mt-3 font-body-large text-body-large text-on-surface-variant max-w-2xl">
            Every chair is a commitment. Ours are built to last decades — combining ergonomic precision with materials that improve with age.
          </p>
          <p className="mt-3 text-caption text-on-surface-variant">
            {loading ? "Loading..." : `${filteredProducts.length} ${filteredProducts.length === 1 ? "piece" : "pieces"}`}
          </p>
        </div>

        {/* Comparison-style list */}
        {loading ? (
          <div className="space-y-4">
            {[0,1,2].map(i => (
              <div key={i} className="animate-pulse rounded-2xl bg-surface-container-low h-40" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-outline-variant/40 p-12 text-center bg-surface-container-lowest">
            <p className="font-body-large text-body-large text-on-surface-variant mb-4">
              No seating options found in this category.
            </p>
            <button
              onClick={() => setSubFilter("all")}
              className="rounded-xl bg-primary px-5 py-2.5 text-label-sm font-label-sm text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-all"
            >
              View All Seating
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col sm:flex-row gap-0 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest transition-all duration-300 hover:shadow-md hover:border-outline-variant/60"
              >
                {/* Image */}
                <Link
                  to={`/product/${product.id}`}
                  className="relative h-52 sm:h-auto sm:w-56 shrink-0 overflow-hidden bg-surface-container-low"
                >
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
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <p className="mb-1.5 text-caption uppercase tracking-widest text-on-surface-variant font-medium">
                        Seating
                      </p>
                      <h2 className="font-h2 text-h2 text-on-surface mb-2">{product.name}</h2>
                      <p className="font-body-base text-body-base text-on-surface-variant max-w-lg line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-h2 text-h2 text-primary">{product.formattedPrice}</p>
                      <div className="mt-1 flex items-center justify-end gap-1">
                        <Star size={13} className="fill-primary text-primary" />
                        <span className="text-caption text-on-surface-variant">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specs Row */}
                  {product.specs && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="rounded-lg bg-surface-container px-3 py-1.5">
                          <span className="text-caption text-on-surface-variant capitalize">{key}: </span>
                          <span className="text-caption font-medium text-on-surface">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Color swatches + Actions */}
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {product.colors?.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-caption text-on-surface-variant">Finishes:</span>
                        <div className="flex gap-1.5">
                          {product.colors.map((c) => (
                            <span
                              key={c}
                              style={{ backgroundColor: c }}
                              className="h-5 w-5 rounded-full border border-outline-variant/50"
                              title={c}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center gap-2 rounded-xl border border-outline-variant/40 px-5 py-2.5 font-label-sm text-label-sm text-on-surface-variant transition-all hover:border-primary hover:text-primary"
                      >
                        <Eye size={15} /> Details
                      </Link>
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-label-sm text-label-sm text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98]"
                      >
                        <Plus size={15} /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Seating

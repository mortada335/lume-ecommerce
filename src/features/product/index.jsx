import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ChevronRight, Heart, Minus, Plus, Star, CheckCircle, ArrowLeft } from "lucide-react"
import { getProductById, getProductsByCategory } from "@/services/api"
import useCartStore from "@/store/cartStore"
import SubHeader from "@/components/layouts/SubHeader"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)

  const { addItem } = useCartStore()

  useEffect(() => {
    let cancelled = false

    getProductById(id)
      .then((p) => {
        if (cancelled) return
        setActiveImage(0)
        setQuantity(1)
        if (!p) {
          setProduct(null)
          return []
        }
        setProduct(p)
        setSelectedColor(p.colors?.[0] ?? null)
        return getProductsByCategory(p.category)
      })
      .then((all) => {
        if (cancelled) return
        if (all) {
          setRelated(all.filter((p) => p.id !== id).slice(0, 3))
        }
      })
      .catch(() => {
        if (!cancelled) setProduct(null)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [id])

  const isCurrentProductLoading = loading || (product && product.id !== id)

  const handleAddToCart = () => {
    if (!product) return
    addItem(product, quantity, selectedColor)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2500)
  }

  if (isCurrentProductLoading) {
    return (
      <div className="min-h-screen bg-background pt-20 px-6 lg:px-12">
        <div className="h-14 mb-8" />
        <div className="mx-auto max-w-7xl animate-pulse">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-[55%] space-y-4">
              <div className="aspect-square rounded-2xl bg-surface-container" />
              <div className="flex gap-3">
                {[0, 1].map((i) => (
                  <div key={i} className="h-20 w-20 rounded-xl bg-surface-container" />
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-5 pt-4">
              <div className="h-5 w-24 rounded bg-surface-container" />
              <div className="h-10 w-3/4 rounded bg-surface-container" />
              <div className="h-8 w-1/3 rounded bg-surface-container" />
              <div className="h-24 rounded bg-surface-container" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-h1 text-h1 text-on-surface mb-4">Product not found</h1>
          <Link to="/shop" className="text-primary hover:underline font-label-sm text-label-sm">
            Back to Collection
          </Link>
        </div>
      </div>
    )
  }

  const categoryLabel = {
    workspace: "Workspace",
    seating: "Seating",
    lighting: "Lighting",
    decor: "Decor",
  }[product.category] ?? product.category

  return (
    <div className="min-h-screen bg-background text-on-background pt-20">
      {/* Toast */}
      {toastVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-on-primary shadow-lg animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle size={18} />
          <span className="font-label-sm text-label-sm">
            Added <strong>{product.name}</strong> to cart
          </span>
        </div>
      )}

      {/* Fixed-height Breadcrumb + Filter Section (h-14 / 56px) */}
      <SubHeader
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: categoryLabel, to: `/${product.category === "workspace" ? "workspace" : product.category}` },
          { label: product.name },
        ]}
      >
        <Link
          to={`/${product.category === "workspace" ? "workspace" : product.category}`}
          className="flex items-center gap-1.5 text-caption text-on-surface-variant hover:text-primary transition-colors"
        >
          <ArrowLeft size={13} />
          <span className="hidden sm:inline">Back to {categoryLabel}</span>
        </Link>
      </SubHeader>

      <main className="mx-auto max-w-7xl px-6 pt-8 pb-20 lg:px-12">
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* ── Left: Images ── */}
          <div className="w-full lg:w-[55%] space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover transition-opacity duration-300"
                loading="eager"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 rounded-full bg-secondary-container px-3 py-1 text-caption font-semibold text-on-secondary-container">
                  New
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                      activeImage === idx
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-outline-variant/30 hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Details (sticky) ── */}
          <div className="flex-1 lg:sticky lg:top-28 lg:self-start space-y-6">
            {/* Category Tag */}
            <span className="inline-block rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1 text-caption font-medium text-on-surface-variant uppercase tracking-wider">
              {categoryLabel}
            </span>

            {/* Name */}
            <h1 className="font-display text-h1 md:text-display text-on-surface leading-tight">
              {product.name}
            </h1>

            {/* Price + Rating */}
            <div className="flex items-center gap-4">
              <span className="font-h2 text-h2 text-primary">{product.formattedPrice}</span>
              <div className="flex items-center gap-1">
                <Star size={15} className="fill-primary text-primary" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">{product.rating} rating</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed border-b border-outline-variant/30 pb-6">
              {product.description}
            </p>

            {/* Specs */}
            {product.specs && (
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="rounded-xl bg-surface-container-low p-3">
                    <p className="text-caption text-on-surface-variant uppercase tracking-wider mb-1 capitalize">{key}</p>
                    <p className="font-label-sm text-label-sm font-medium text-on-surface">{val}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Color Swatches */}
            {product.colors?.length > 0 && (
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wider">
                  Color
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      title={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`h-9 w-9 rounded-full transition-all ${
                        selectedColor === color
                          ? "ring-2 ring-primary ring-offset-2 scale-110"
                          : "ring-1 ring-outline-variant hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wider">
                Quantity
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-low w-fit px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium text-on-surface">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 rounded-xl bg-primary py-4 font-label-sm text-label-sm text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98]"
              >
                Add to Cart — {product.formattedPrice}
              </button>
              <button
                onClick={() => setWishlisted((w) => !w)}
                aria-label="Wishlist"
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-all ${
                  wishlisted
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-outline-variant/40 bg-surface-container-low text-on-surface-variant hover:border-red-200 hover:text-red-500"
                }`}
              >
                <Heart size={20} fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-h1 text-h1 text-on-surface mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-surface-container-low">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-caption tracking-wider text-on-surface-variant uppercase font-medium capitalize">{p.category}</p>
                    <h3 className="font-body-large text-body-large font-medium text-on-surface mb-2">{p.name}</h3>
                    <span className="font-label-sm text-label-sm font-semibold text-primary">{p.formattedPrice}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default ProductDetail

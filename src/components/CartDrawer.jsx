import { X, Plus, Minus, ShoppingBag, Trash2, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useCartStore from "@/store/cartStore"

const CartDrawer = () => {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, clearCart } = useCartStore()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  const handleCheckout = () => {
    setOrderPlaced(true)
    clearCart()
    setTimeout(() => {
      setOrderPlaced(false)
      closeDrawer()
    }, 3000)
  }

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-h2 text-h2 text-on-surface">Your Cart</h2>
            {items.length > 0 && (
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-caption font-bold text-on-primary">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Order Success State */}
        {orderPlaced ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h3 className="font-h2 text-h2 text-on-surface">Order Placed!</h3>
            <p className="font-body-base text-body-base text-on-surface-variant">
              Thank you for your mock purchase. We'll pretend to ship it shortly.
            </p>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container">
              <ShoppingBag size={28} className="text-on-surface-variant" />
            </div>
            <h3 className="font-body-large text-body-large font-medium text-on-surface">
              Your cart is empty
            </h3>
            <p className="font-body-base text-body-base text-on-surface-variant">
              Browse the collection to find something you love.
            </p>
            <Link
              to="/shop"
              onClick={closeDrawer}
              className="mt-2 rounded-xl bg-primary px-8 py-3 font-label-sm text-label-sm text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98]"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map(({ product, quantity, selectedColor }) => (
                <div
                  key={`${product.id}-${selectedColor}`}
                  className="flex gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-4"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${product.id}`}
                    onClick={closeDrawer}
                    className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-container"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={closeDrawer}
                        className="font-body-base text-body-base font-medium text-on-surface hover:text-primary transition-colors line-clamp-2"
                      >
                        {product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(product.id, selectedColor)}
                        aria-label="Remove item"
                        className="shrink-0 text-on-surface-variant/60 transition-colors hover:text-destructive"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    {selectedColor && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className="h-3 w-3 rounded-full border border-outline-variant/50"
                          style={{ backgroundColor: selectedColor }}
                        />
                        <span className="text-caption text-on-surface-variant">Color</span>
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-1">
                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        ${(product.price * quantity).toLocaleString()}
                      </span>
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 rounded-lg border border-outline-variant/40 bg-surface px-1">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1, selectedColor)}
                          className="flex h-7 w-7 items-center justify-center rounded-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-5 text-center text-label-sm font-medium text-on-surface">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1, selectedColor)}
                          className="flex h-7 w-7 items-center justify-center rounded-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Checkout */}
            <div className="border-t border-outline-variant/30 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body-base text-body-base text-on-surface-variant">Subtotal</span>
                <span className="font-h2 text-h2 text-primary">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-caption text-on-surface-variant">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                onClick={handleCheckout}
                className="w-full rounded-xl bg-primary py-4 font-label-sm text-label-sm text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full rounded-xl border border-outline-variant/50 py-3 font-label-sm text-label-sm text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer

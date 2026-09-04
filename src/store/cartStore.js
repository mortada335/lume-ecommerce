import { create } from "zustand"

const useCartStore = create((set, get) => ({
  // ── State ──────────────────────────────────────────────
  items: [],          // { product, quantity, selectedColor }
  isDrawerOpen: false,

  // ── Drawer Controls ────────────────────────────────────
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

  // ── Cart Actions ───────────────────────────────────────
  addItem: (product, quantity = 1, selectedColor = null) => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.product.id === product.id && i.selectedColor === selectedColor
      )
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id && i.selectedColor === selectedColor
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        }
      }
      return {
        items: [...state.items, { product, quantity, selectedColor }],
      }
    })
  },

  removeItem: (productId, selectedColor = null) => {
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.product.id === productId && i.selectedColor === selectedColor)
      ),
    }))
  },

  updateQuantity: (productId, quantity, selectedColor = null) => {
    if (quantity <= 0) {
      get().removeItem(productId, selectedColor)
      return
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.product.id === productId && i.selectedColor === selectedColor
          ? { ...i, quantity }
          : i
      ),
    }))
  },

  clearCart: () => set({ items: [] }),

  // ── Computed ───────────────────────────────────────────
  get totalItems() {
    return get().items.reduce((sum, i) => sum + i.quantity, 0)
  },
  get subtotal() {
    return get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  },
}))

export default useCartStore

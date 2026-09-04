import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "@/navigation"
import useCartStore from "@/store/cartStore"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { items, toggleDrawer } = useCartStore()
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/80 shadow-sm backdrop-blur-xl dark:shadow-none">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center px-6 lg:px-12">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <NavLink
            to="/"
            className="font-display text-h2 font-semibold tracking-tight text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Lume
          </NavLink>
        </div>

        {/* Center Navigation — Desktop */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative py-1 font-medium transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all duration-300 hover:bg-primary/5 hover:text-primary active:scale-95 md:flex"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="User Account"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all duration-300 hover:bg-primary/5 hover:text-primary active:scale-95 md:flex"
          >
            <User size={20} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Open Cart"
            onClick={toggleDrawer}
            className="group relative flex h-10 items-center gap-2 rounded-full px-2 text-on-surface-variant transition-all duration-300 hover:text-primary active:scale-95"
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span className="hidden font-body-base font-medium md:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-on-primary">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-primary/5 hover:text-primary md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-outline-variant/20 bg-surface/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-medium transition-colors ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-semibold"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

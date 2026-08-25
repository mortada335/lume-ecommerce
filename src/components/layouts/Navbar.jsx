import { Search, ShoppingBag, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const NAV_LINKS = [
    { label: "Shop", to: "/shop" },
    { label: "Office", to: "/office" },
    { label: "Seating", to: "/seating" },
    { label: "About", to: "/about" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/80 shadow-sm backdrop-blur-xl dark:shadow-none">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center px-6 lg:px-12">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <NavLink
            to="/"
            className="font-display text-h2 font-semibold tracking-tight text-primary"
          >
            Lume
          </NavLink>
        </div>

        {/* Center Navigation */}
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
        <div className="ml-auto flex shrink-0 items-center gap-5">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all duration-300 hover:bg-primary/5 hover:text-primary active:scale-95"
          >
            <Search size={21} strokeWidth={1.8} />
          </button>

          {/* Account */}
          <button
            type="button"
            aria-label="User Account"
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all duration-300 hover:bg-primary/5 hover:text-primary active:scale-95"
          >
            <User size={21} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Cart"
            className="group relative flex h-10 items-center gap-2 rounded-full px-2 text-on-surface-variant transition-all duration-300 hover:text-primary active:scale-95"
          >
            <ShoppingBag
              size={21}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />

            <span className="hidden font-body-base font-medium md:inline">
              Cart
            </span>

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-on-primary">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

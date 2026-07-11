import { ShoppingBag, User } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
      <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/80 shadow-sm backdrop-blur-xl dark:shadow-none">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-4">
            {/* <img
              src="/src/assets/lume_logo.svg"
              alt="Lume Logo"
              className="h-14 w-14 rounded-lg object-cover"
            /> */}
            <NavLink
             className="font-display text-h2 font-semibold tracking-tight text-primary"
             to="/"
             >
              Lume
            </NavLink>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              className="border-b-2 border-primary pb-1 font-semibold text-primary"
              to="/store"
            >
              Store
            </NavLink>
            <NavLink
              className="font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary"
              to="/categories"
            >
              Categories
            </NavLink>
            <NavLink
              className="font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary"
              to="/about"
            >
              About Us
            </NavLink>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-on-surface-variant transition-colors duration-300 hover:text-primary active:scale-[0.98]">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant transition-colors duration-300 hover:text-primary active:scale-[0.98]">
              <span className="material-symbols-outlined">
                <ShoppingBag size={24} />
              </span>
              <span className="hidden font-body-base font-medium md:inline">
                Cart
              </span>
            </button>
          </div>
        </nav>
      </header>
  )
}

export default Navbar

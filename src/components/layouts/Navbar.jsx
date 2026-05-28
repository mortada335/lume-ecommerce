import { ShoppingBag, User } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
  <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/80 shadow-sm backdrop-blur-xl dark:border-outline/20 dark:bg-on-surface/80 dark:shadow-none">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          className="flex justify-center text-center text-2xl font-bold"
          to="/"
        >
          <img 
          src="/src/assets/lume_logo.svg" 
          alt="Lume Logo"
          className="w-fit h-fit object-cover"
            />
          Lume
        </Link>
        <div className="hidden items-center justify-center gap-3 md:flex md:flex-row">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b border-primary" : ""
            }
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b border-primary" : ""
            }
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b border-primary" : ""
            }
            to="/sustainability"
          >
            Sustainability
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b border-primary" : ""
            }
            to="/journal"
          >
            Journal
          </NavLink>
        </div>

        <div className="hidden items-center justify-center gap-3 md:flex">
          <User size={18} />
          <div className="flex items-center justify-center gap-2">
            <ShoppingBag size={18} />
            <span>Cart</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

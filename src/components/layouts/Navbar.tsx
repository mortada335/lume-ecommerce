import { ShoppingBag, User } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

const Navbar = () => {
  return (
<header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-on-surface/80 backdrop-blur-xl border-b border-outline-variant/20 dark:border-outline/20 shadow-sm dark:shadow-none">
<nav className="flex justify-between items-center w-full h-20 px-6 lg:px-12 max-w-7xl mx-auto">
  <Link className="text-2xl font-bold text-center flex justify-center" to="/">
          Lume
        </Link>
        <div className="hidden md:flex-row items-center justify-center gap-3 md:flex">
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
          to="/collection">Collection</NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b border-primary" : ""
            }
          to="/sustainability">Sustainability</NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b border-primary" : ""
            }
           to="/journal">Journal</NavLink>
        </div>

        <div className="hidden md:flex items-center justify-center gap-3">
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
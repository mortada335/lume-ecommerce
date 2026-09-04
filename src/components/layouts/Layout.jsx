import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CartDrawer from "@/components/CartDrawer"
import ScrollToTop from "@/components/ScrollToTop"

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

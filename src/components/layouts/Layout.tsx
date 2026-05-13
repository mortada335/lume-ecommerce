// Shared layout components barrel export
// export { Navbar } from './Navbar'
// export { Footer } from './Footer'
// export { MainLayout } from './MainLayout'
// export { MobileMenu } from './MobileMenu'
// export { SearchOverlay } from './SearchOverlay'
import Navbar from "@/components/layouts/Navbar"
import { Outlet } from "react-router-dom";

const Layout = () => {
        return (
                <>
                <Navbar />
                <Outlet />
                </>
        )
}

export default Layout;
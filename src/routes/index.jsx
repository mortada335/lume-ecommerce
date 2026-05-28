import { lazy } from "react"

const Home = lazy(() => import("@/features/home"))
const Shop = lazy(() => import("@/features/shop"))

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]

/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"

const Home = lazy(() => import("@/features/home"))
const Shop = lazy(() => import("@/features/shop"))
const Store = lazy(() => import("@/features/store"))
const Office = lazy(() => import("@/features/office"))
const Seating = lazy(() => import("@/features/seating"))
const About = lazy(() => import("@/features/about"))

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/office",
    element: <Office />,
  },
  {
    path: "/seating",
    element: <Seating />,
  },
  {
    path: "/about",
    element: <About />,
  },
]

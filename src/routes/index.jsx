/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"

const Home = lazy(() => import("@/features/home"))
const Shop = lazy(() => import("@/features/shop"))
const Workspace = lazy(() => import("@/features/workspace"))
const Seating = lazy(() => import("@/features/seating"))
const Philosophy = lazy(() => import("@/features/about"))
const Product = lazy(() => import("@/features/product"))
const NotFound = lazy(() => import("@/features/not-found"))

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
  {
    path: "/workspace",
    element: <Workspace />,
  },
  {
    path: "/seating",
    element: <Seating />,
  },
  {
    path: "/philosophy",
    element: <Philosophy />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

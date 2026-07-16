/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"

const Home = lazy(() => import("@/features/Home"))
const Store = lazy(() => import("@/features/Store"))

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
]

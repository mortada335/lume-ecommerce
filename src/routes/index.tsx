import { lazy } from "react";



const Home = lazy(() => import("@/features/home"))

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true
  },
]
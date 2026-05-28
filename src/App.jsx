import Layout from "@/components/layouts/Layout"
import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "./routes"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {publicRoutes.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App

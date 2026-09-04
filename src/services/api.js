import { PRODUCTS } from "@/data/products"

// Simulates network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// GET all products
export const getProducts = async () => {
  await delay(600)
  return [...PRODUCTS]
}

// GET single product by id
export const getProductById = async (id) => {
  await delay(400)
  const product = PRODUCTS.find((p) => p.id === id)
  if (!product) throw new Error(`Product "${id}" not found`)
  return product
}

// GET products filtered by category
export const getProductsByCategory = async (category) => {
  await delay(500)
  return PRODUCTS.filter((p) => p.category === category)
}

// GET only new/featured products (isNew === true)
export const getFeaturedProducts = async () => {
  await delay(400)
  return PRODUCTS.filter((p) => p.isNew)
}

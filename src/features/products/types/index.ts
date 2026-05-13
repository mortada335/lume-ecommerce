// Products feature types

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  compareAtPrice?: number
  images: ProductImage[]
  category: Category
  variants?: ProductVariant[]
  inStock: boolean
  rating: number
  reviewCount: number
  createdAt: string
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  isPrimary: boolean
}

export interface ProductVariant {
  id: string
  name: string
  sku: string
  price: number
  inStock: boolean
  attributes: Record<string, string>
}

export interface Category {
  id: string
  name: string
  slug: string
  image?: string
  parentId?: string
}

export interface ProductFilters {
  categoryId?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'rating' | 'popular'
  search?: string
  page?: number
  limit?: number
}

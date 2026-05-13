// Shared type definitions
// These are global types used across multiple features

export interface ApiResponse<T> {
  data: T
  message?: string
  status: number
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    currentPage: number
    lastPage: number
    perPage: number
    total: number
  }
}

export interface ApiError {
  message: string
  errors?: Record<string, string[]>
  status: number
}

export interface Product {
  id: number
  company?: string
  title?: string
  image?: string
  rating?: ProductRating
  price?: ProductPrice
  deliveryOptions?: DeliveryOptions
  badge?: ProductBadge
  colors: Record<string, ProductColors>
}

export interface ProductPrice {
  value?: number
  discount?: number
}

export interface ProductRating {
  value?: number,
  reviews?: number
}

export interface DeliveryOptions {
  delivery?: string
  postamate?: boolean
  available?: number
}
export interface ProductBadge {
  color?: string,
  text?: string
}
export interface ProductColors {
  color?: string
  image?: string
}


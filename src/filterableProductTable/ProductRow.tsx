import React from 'react'
import { Product } from '../types/Product'

interface ProductRowProps {
  product: Product;
}

export default function ProductRow( { product }: ProductRowProps) {
    const name = product.stocked ? product.name : 
    <span className="out-of-stock">
        {product.name }
    </span>
  return (
    <tr className="product-row">
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
  )
}

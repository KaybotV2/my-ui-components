import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { Product } from '../types/Product'

import '../css/ProductFilterable.css'

interface FilterableProducTableProps {
  products: Product[];
}

export default function FilterableProducTable({ products }: FilterableProducTableProps) {
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false)


  return (
    <div className="filterable-product-table">
        <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
        />
    </div>
  )
}

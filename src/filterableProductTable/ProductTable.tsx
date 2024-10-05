import React from 'react'
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import {Product } from '../types/Product';

interface ProductTableProps {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
}

export default function ProductTable({ products, filterText, inStockOnly }: ProductTableProps) {
    const rows: JSX.Element[] = [];
    let lastCatergory: string | null = null;

    const filteredProducts = products.filter(product => {
        const productNameMatch = product.name.toLowerCase().includes(filterText.toLowerCase())
        const stockMatch = inStockOnly ? product.stocked : true;
        return productNameMatch && stockMatch;
    })

    filteredProducts.forEach((product) => {
        if (product.category !== lastCatergory) {
            rows.push(
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category}
                />
            );
        }

        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        )
        lastCatergory = product.category
    });


  return (
    <table className="product-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows.length > 0 ? rows : <tr><td>No results found</td></tr>}
        </tbody>
    </table>
  )
}

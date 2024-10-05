import React from 'react';

interface ProductCategoryRowProps {
  category: string;
}

export default function ProductCategoryRow({ category }: ProductCategoryRowProps) {
    return (
      <tr className="product-category-row">
        <th>
          {category}
        </th>
      </tr>
    );
  }
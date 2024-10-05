import React from 'react'

interface SearchBarProbs {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (value: string) => void;
  onInStockOnlyChange: (value: boolean) => void;
}

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: SearchBarProbs) {
  return (
    <form className="search-bar">
        <input 
            type="text" 
            value={filterText}
            placeholder='Search...'
            onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
            <input 
                type='checkbox' 
                checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />
            {' '}
            Only show product in stock
        </label>
    </form>
  )
}

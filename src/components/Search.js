import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [state, setState] = useState(false)
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice(prev => {
      prev[name] = value

      return prev
    })
    setState(p => !p)
    // TODO: implement price change handler
  }

  const onCheckboxClick = (name, checked) => {
    setColumns(prev => {
      prev[name] = Boolean(checked)
      console.log('che', checked)
      console.log('prev', prev, checked)

      return prev
    })
    setState(p => !p)
    // TODO: implement checkbox click handler
  }

  const filterProducts = () => {
    let products = props.products.map(el => {
      const isProductIsBeforeMax = Boolean(el.price <= Number(price.priceFrom ))
      const isProductIsAboveMin = Boolean(el.price >= Number(price.priceTo))
      
      if (isProductIsAboveMin && isProductIsBeforeMax) return el
    })

    if (price.priceFrom && price.priceTo) return products
    else return props.products
    // TODO: implement handler for filtering products by price range
  }
console.log('products', filterProducts())
  let displayedProducts = props.products; //[]
  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;

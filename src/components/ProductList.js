import React from 'react'

export const ProductList = (props) => {
  const { columns, products } = props
  // TODO: display appropriate header
  // TODO: display only chosen columns
  return (
    <div id="product-list">
      <header>
        <strong>Product List (0 items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns.id ? <th>ID</th> : null}
            {columns.name ? <th>Name</th> : null}
            {columns.department ? <th>Department</th> : null}
            {columns.price ? <th>Price</th> : null}
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, department, currency, price }) => {
            const _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const _currency = columns.currency ? currency : ""
            
            return (
              <tr>
                {columns.id ? <th>{id}</th> : null}
                {columns.name ? <th>{name}</th> : null}
                {columns.department ? <th>{department}</th> : null}
                {columns.price ? 
                <th>{
                  (_currency === "$") 
                    ? <>{_currency}{_price}</> : <>{_price}{_currency}</>
                }</th> : null}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

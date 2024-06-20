import React from 'react'

const Products = (props) => {
  const {product} = props
  return (
    <div>
      <h1>Hello this {product.id}</h1>
    </div>
  )
}

export default Products

import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    //console.log(props)
  return (
    <div>
        {
            React.Children.toArray(
            props.data.map(item=><ProductCard product={item} infoFunction={props.handle} />)

            )
        }
    </div>
  )
}

export default ProductList
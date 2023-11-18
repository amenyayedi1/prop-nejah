import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({product,infoFunction}) => {
    //console.log(product)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pic} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="info" onClick={()=>infoFunction(product)} >info</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default ProductCard
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { NewContext } from './Routecom';


const Product = () => {
  const [product, setproduct] = useState([])
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        setproduct(res.data)
        // console.log(res.data);
      })

    }, [product])
    
  return (
    <div className='row'>
      {product.map((e)=>{
        return(
<Card style={{ width: '15rem' }} className='card'>
      <Card.Img variant="top" src={e.image} style={{ width:"70%", height:"200px"}}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Title>
        ₹{e.price}
        </Card.Title>
        <Button variant="primary"><Link to={'/cart/'+e.id} className='link'>Buy</Link></Button>
      </Card.Body>
    </Card>
        )
      })}

    </div>
  )
}

export default Product
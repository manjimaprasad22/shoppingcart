import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { NewContext } from './Routecom'

const Cart = () => {

  const param = useParams().id
  const [product, setproduct] = useState([])
  const [val, setval] = useState()
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        setproduct(res.data)
        console.log(res.data);
      })

    }, [product])
    
  return (
    <div className='row'>
      
      {product.filter((item)=>item.id===parseInt(param)).map((e)=>{
        
        return(
<Card style={{ width: '15rem' }} className='card'>
      <Card.Img variant="top" src={e.image} style={{ width:"70%", height:"200px"}}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title> <Card.Title>
        ₹{e.price}
        </Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Button variant="primary"><Link  className='link'>remove</Link></Button>
      </Card.Body>
    </Card>
    
   
        )
      })}

    </div>
  )
}

export default Cart
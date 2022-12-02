import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Cart from './Cart'
import Product from './Product'


const NewContext = createContext()

const Routecom = () => {
  const [product, setproduct] = useState([])
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        setproduct(res.data)
        // console.log(res.data);
      })

    }, [product])
  return (
    <div>
      <NewContext.Provider value={{value1:[product, setproduct]}}>
        <BrowserRouter>
        <App/>
        <Routes>
          <Route path='/product' element={<Product/>}> </Route>
          <Route path='/cart/:id' element={<Cart/>}> </Route>
        </Routes>
        </BrowserRouter>
      </NewContext.Provider>

    </div>
  )
}

export default Routecom
export {NewContext}
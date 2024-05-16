import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products?limit=8")
    setProducts(response.data)
  }

  useEffect(() =>{
    getProducts()
  }, [])
  return (
  <div>
       {products.map((prod)=> (
            <ProductCard title={prod.title} category={prod.category} image={prod.image} desc={prod.description} prise={prod.price} count={prod.count}/>
       ))}
  </div>
  )
}

export default App;
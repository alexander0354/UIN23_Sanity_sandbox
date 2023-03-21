import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'

function App() {

  const [prods, setProds] = useState(null)

  //Asyncron funksjon, venter på servicen "FetchAllProducts"
  const getProducts = async () => {
    const data = await fetchAllProducts()
    //ProductServices-js
    setProds(data)
  }

//Kjøres når appen blir lastet inn, ber om getProducts
  useEffect(() => {
    getProducts()
  }, [])

  console.log(prods)

  return (
    <>
    <h1>Innhold fra Sanity</h1>
    {prods?.map((p, i) => <h2 key={i}>{p.product_title}</h2>)}
    </>
  );
}

export default App;

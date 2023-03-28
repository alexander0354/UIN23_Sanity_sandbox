import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import Frontpage from './pages/Frontpage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';


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
    <Routes>
      <Route index element={<Frontpage products={prods} />} />
      <Route path=":slug" element={<ProductPage />} />
      <Route path="kategori">
        <Route index element={<CategoriesPage />} />
        <Route path=":category" element={<CategoryPage />} />
      </Route>
    </Routes>

  );
}


export default App;
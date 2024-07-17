import { useEffect } from 'react'
import Header from './Header'
import Filter from './Filter'
import ProductList from './ProductsList'
import '../css/index.scss'
import '../css/product-list.scss'
import {useDarkTheme, productsApi} from '../zustand/zustandStore'

function App() {

  const isDarkTheme = useDarkTheme((state)=>state.isDarkTheme)
  const fetchProducts = productsApi((state)=>state.fetchProducts)
  const products = productsApi((state)=> state.products)

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkTheme]);

  useEffect(() => {
  fetchProducts(`https://dummyjson.com/products?limit=0`)
  }, [])
  console.log('render App')

  return (
    <div>
      <Header/>
      <Filter />
      {
        products ? < ProductList products={products.products}/> :
        <h1 className="products-loading">
          Loading...
        </h1>
      }
    </div>
  )
}

export default App

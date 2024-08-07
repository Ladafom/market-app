import { useEffect } from 'react'
import '../css/select.scss'
import {categoryApi, productsApi, amountProducts, searcProduct , useValid} from '../zustand/zustandStore'

function SelectCategory() {

  const fetchCategory = categoryApi((state)=>state.fetchCategory)
  const categories = categoryApi((state)=> state.categories)
  const fetchProducts = productsApi((state)=>state.fetchProducts)
  const setSelectedCategory = categoryApi((state)=> state.setSelectedCategory)
  const amount = amountProducts((state)=> state.amount)
  const setQuery = searcProduct((state)=>state.setQuery)
  const setIsValid = useValid((state)=>state.setIsValid)

  useEffect(() => {
    fetchCategory('https://dummyjson.com/products/categories')
  }, [])

  function selectHandle(value:any){
    if(value === 'all')
    fetchProducts(`https://dummyjson.com/products?limit=${amount}`)
    else
    fetchProducts(`https://dummyjson.com/products/category/${value}?limit=${amount}`)

    setSelectedCategory(value)
    setQuery('')
    setIsValid(true)
  }

  // console.log('render Select')
  if(categories){
    return (
      <div className='filter-select'>
        <select
        id='selectAmount'
        defaultValue='select'
        onChange={(e)=>selectHandle(e.target.value)}
        >
        <option value="select" disabled >Select</option>
        {
          categories?.map((category:any)=>{
            return(
              <option value={category.slug} key={category.slug}>{category.name}</option>
            )
          })
        }
        <option value="all" >All</option>
        </select>
      </div>
    )
  }
}

export default SelectCategory
import '../css/select.scss'
import {categoryApi, productsApi, amountProducts, searcProduct} from '../zustand/zustandStore'

function SelectAmount() {

  const fetchProducts = productsApi((state)=>state.fetchProducts)
  const selectedCategory = categoryApi((state)=>state.selectedCategory)
  const setAmount = amountProducts((state)=> state.setAmount)
  const query = searcProduct((state)=>state.query)

  function selectHandle(value:any){
    if(query===''){
      if(value === 'all' && selectedCategory === '' || selectedCategory === 'all'){
        fetchProducts(`https://dummyjson.com/products/?limit=0`)
        setAmount('0')
      }
      else if (value === 'all' && selectedCategory !== ''){
        fetchProducts(`https://dummyjson.com/products/category/${selectedCategory}?limit=0`)
        setAmount('0')
      }
      else if (value !== 'all' && selectedCategory === ''){
        fetchProducts(`https://dummyjson.com/products?limit=${value}`)
        setAmount(value)
      }
      else {
        fetchProducts(`https://dummyjson.com/products/category/${selectedCategory}?limit=${value}`)
        setAmount(value)
      }
    } else {
      if(value === 'all'){
        fetchProducts(`https://dummyjson.com/products/search?q=${query}&limit=0`)
        setAmount('0')
      } else {
        fetchProducts(`https://dummyjson.com/products/search?q=${query}&limit=${value}`)
        setAmount(value)
      }
    }
  }
  // console.log('render SelectAmount')
  return (
    <div className='filter-select'>
      <select
      defaultValue='10'
      onChange={(e)=>selectHandle(e.target.value)}
      >
      <option value='10'>10</option>
      <option value='20'>20</option>
      <option value='30'>30</option>
      <option value='40'>40</option>
      <option value='50'>50</option>
      <option value="all">All</option>
      </select>
    </div>
  )
}

export default SelectAmount
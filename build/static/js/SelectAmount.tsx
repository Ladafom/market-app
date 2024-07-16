import '../css/select.scss'
import {categoryApi, productsApi} from '../zustand/zustandStore'

function SelectAmount({amount}:any) {

  const fetchProducts = productsApi((state)=>state.fetchProducts)
  const selectedCategory = categoryApi((state)=>state.selectedCategory)

  function selectHandle(value:any){
    if(value === 'all' && selectedCategory === '' || selectedCategory === 'all'){
      fetchProducts(`https://dummyjson.com/products/?limit=0`)

    }
    else if (value === 'all' && selectedCategory !== ''){
      fetchProducts(`https://dummyjson.com/products/category/${selectedCategory}?limit=0`)
    }
    else if (value !== 'all' && selectedCategory === ''){
      fetchProducts(`https://dummyjson.com/products?limit=${value}`)
    }
    else {
      fetchProducts(`https://dummyjson.com/products/category/${selectedCategory}?limit=${value}`)
    }
  }
  console.log('render SelectAmount')
  return (
    <div className='filter-select'>
      <select
      defaultValue='all'
      onChange={(e)=>selectHandle(e.target.value)}
      >
      <option value={Math.round(amount/4)}>{Math.round(amount/4)}</option>
      <option value={Math.round(amount/3)}>{Math.round(amount/3)}</option>
      <option value={Math.round(amount/2)}>{Math.round(amount/2)}</option>
      <option value="all">All</option>
      </select>
    </div>
  )
}

export default SelectAmount
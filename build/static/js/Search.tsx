import searchIcon from '../img/search-icon.svg'
import { searcProduct, productsApi, amountProducts, useValid } from '../zustand/zustandStore';

function Search(){

const query = searcProduct((state)=> state.query)
const amount = amountProducts((state)=> state.amount)
const setQuery = searcProduct((state)=>state.setQuery)
const fetchProducts = productsApi((state)=>state.fetchProducts)
const isValid = useValid((state)=>state.isValid)
const setIsValid = useValid((state)=>state.setIsValid)
const validQuery = /[a-z0-9 ]$/gm

  function searchOnClick (){
    if(query.match(validQuery)){
      setIsValid(true)
      fetchProducts(`https://dummyjson.com/products/search?q=${query}&limit=${amount}`)
      const select = document.querySelector<HTMLSelectElement>('#selectAmount')
      if(select)
      select.value = 'select'
    }
    else {
      setIsValid(false)
    }
  }
  return(
    <div className="filter-search">
      <input type="search"
        value={query}
        placeholder="Search"
        className="filter-search-input"
        onChange={(e) => setQuery((e.target.value).toLowerCase())}
        />
      <img src={searchIcon} alt=""
        className="filter-search-icon"
        onClick={searchOnClick}/>
      { !isValid && <p className='filter-valid-error'>Only Latin characters, numbers and spaces are allowed</p>}
    </div>
  )
}

export default Search
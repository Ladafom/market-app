import { useEffect } from 'react'
import '../css/select.scss'
import {categoryApi} from '../zustand/zustandStore'

function SelectCategory() {

  const fetchCategory = categoryApi((state)=>state.fetchCategory)
  const categories = categoryApi((state)=> state.categories)

  useEffect(() => {
    fetchCategory('https://dummyjson.com/products/categories')
  }, [])

  function selectHandle(value:any){
    console.log(`selected ${value}`);
  }

  console.log('render Select')
  if(categories){
    return (
      <div className='filter-select'>
        <select
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
        </select>
      </div>
    )
  }
}

export default SelectCategory
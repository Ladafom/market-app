// import React, { useEffect } from "react";
import SelectCategory from './SelectCategory'
import SelectAmount from './SelectAmount';
import searcchIcon from '../img/search-icon.svg'
import '../css/filter.scss'

function Filter({amount}:any){
  const sarchHandle = (value:any) => {
    console.log(`selected ${value}`);
  };
  return(
    <div className="filter">
      <div className="filter-search">
        <input type="search"
          name=""
          id=""
          placeholder="Search"
          className="filter-search-input"
          onChange={sarchHandle}
          />
        <img src={searcchIcon} alt=""
          className="filter-search-icon"/>
      </div>
      <SelectCategory/>
      <SelectAmount amount={amount}/>
    </div>
  )
}

export default Filter
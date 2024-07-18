// import React, { useEffect } from "react";
import SelectCategory from './SelectCategory'
import SelectAmount from './SelectAmount';
import Search from './Search';
import '../css/filter.scss'

function Filter(){
  return(
    <div className="filter">
      <Search/>
      <SelectCategory/>
      <SelectAmount />
    </div>
  )
}

export default Filter
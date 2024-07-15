import '../css/select.scss'

function SelectAmount({amount}:any) {

  function selectHandle(value:any){
    console.log(`selected ${value}`);
  }
  console.log(amount)
  console.log('render SelectAmount')
  return (
    <div className='filter-select'>
      <select
      defaultValue='select'
      onChange={(e)=>selectHandle(e.target.value)}
      >
      <option value={Math.round(amount/5)}  >{Math.round(amount/5)}</option>
      <option value={Math.round(amount/4)}  >{Math.round(amount/4)}</option>
      <option value={Math.round(amount/3)}  >{Math.round(amount/3)}</option>
      <option value={Math.round(amount/2)}  >{Math.round(amount/2)}</option>
      <option value="all">All</option>
      </select>
    </div>
  )
}

export default SelectAmount
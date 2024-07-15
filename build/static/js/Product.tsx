import '../css/product.scss'

function Product (props:any){
  return(
    <div className="product">
      <img src={props.image}
      alt="" className='product-img'
      loading="lazy"  />
      <p className='product-title'>{props.title}</p>
      <h4> $ {props.price}</h4>
    </div>
  )
}

export default Product
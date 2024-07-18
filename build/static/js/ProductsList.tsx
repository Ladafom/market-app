import Product from "./Product";
import '../css/product-list.scss'

function ProductList ({products}:any){

  return(
    <div className="product-list">
      {products?.map((product:any) =>(
        <Product title={product.title} price={product.price} image={product.thumbnail} key={product.id}/>
      ))}
    </div>
  )
}

export default ProductList
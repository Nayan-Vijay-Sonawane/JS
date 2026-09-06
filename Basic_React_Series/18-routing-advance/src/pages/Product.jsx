import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <Link to='product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      </div>
      <h1 className="font-bold">Product Page</h1>
    </div>  
  )   
};  

export default Product;

import {useDispatch} from "react-redux"
import {addProductsToCart} from "../redux/ActionCreators"
import PropTypes from 'prop-types';

const Product = ({product}) => {
  const dispatch=useDispatch();
  return (
    <div className="Product">
      <img src={product.images[0]} alt={product.title} />
      <div className="product_desc">
        <p>
          Title: <strong>{product.title}</strong>
        </p>
        <p>
          Price: <strong>₹{product.price}</strong>
        </p>
      </div>
      <button className="addToCart_Btn" onClick={()=>dispatch(addProductsToCart(product))}>Add To Cart</button>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Add other properties if necessary
  }).isRequired,
};

export default Product;

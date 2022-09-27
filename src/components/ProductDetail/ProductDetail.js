import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProduct,
  removeSelectedProduct,
} from '../../store/Action/Action.js';
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="row">
          <div className="ui vertical divider">AND</div>

          <div className="col-6">
            <img className="img-thumbnail w-25" src={image} alt="ui" />
          </div>
          <div className="col-6">
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

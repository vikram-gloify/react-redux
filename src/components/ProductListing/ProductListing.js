import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/Action/Action';
import Product from '../Product/Product';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log('Products :', products);
  return (
    <div className="product-listing">
      <Product />
    </div>
  );
};

export default ProductListing;

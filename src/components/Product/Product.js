import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card" style={{ width: `18rem` }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="card">
            <img src={image} alt={title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-black">{title}</h5>
              <p className="card-text text-black">$ {price}</p>
              <p className="card-text text-black">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;

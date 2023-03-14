import React from "react";

const Product = ({ name, price, id, onRemove }) => {
  return (
    <div className="product">
      <div className="body">
        <h1 className="title">{name}</h1>
        <div className="price">{price}</div>
      </div>
      <button onClick={() => onRemove(id)} type="button">
        Remove
      </button>
    </div>
  );
};

export default Product;

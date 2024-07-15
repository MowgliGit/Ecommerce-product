import React, { useState } from "react";

export default function Item({ addToCart }) {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count > 0) {
      const product = {
        id: 1,
        name: "Fall limited edition sneakers",
        price: 125.0,
        count: count,
      };
      addToCart(product);
    }
  };

  return (
    <div className="card">
      <div className="card-box">
        <span className="card-box-shorttitle">Sneaker company</span>
        <h1 className="card-box-title">Fall limited edition sneakers</h1>
        <p className="card-box-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="box-prices">
        <div className="prices">
          <span className="bold-price">$125.00</span>{" "}
          <span className="color-price">50%</span>
        </div>
        <div className="price">
          <span>$250.00</span>
        </div>
      </div>
      <div className="boxWithButtons">
        <div className="buttons">
          <button
            onClick={() => setCount((c) => Math.max(c - 1, 0))}
            className="button-minus"
          >
            <img src="./images/icon-minus.svg" alt="minus" />
          </button>
          <div className="number">{count}</div>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="button-plus"
          >
            <img src="./images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <button
          className="addToCard"
          onClick={handleAddToCart}
          style={{ color: "#fff" }}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

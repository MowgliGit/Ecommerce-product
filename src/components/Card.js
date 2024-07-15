import React from "react";

export default function Card({ cartItems, removeFromCart, handleCheckout }) {
  console.log(cartItems, "catttt");
  return (
    <div className="cartContainer">
      <h2 className="emptyTitle">Cart</h2>
      <hr />
      <div className="cartDetails">
        {cartItems.length === 0 ? (
          <span className="emptyText">Your cart is empty.</span>
        ) : (
          cartItems.map((product) => (
            <div className="cartProduct" key={product.id}>
              <img
                src="./images/image-product-1.jpg"
                className="cartImg"
                alt="product"
              />
              <div className="productInfo">
                <p>{product.name}</p>
                <p>
                  ${product.price} x {product.count} ={" "}
                  <span style={{ fontWeight: "700", color: "#222" }}>
                    ${product.count * product.price}
                  </span>
                </p>
              </div>
              <button
                className="garbageIcon"
                onClick={() => removeFromCart(product.id)}
              >
                🗑
              </button>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <button className="addToCard" onClick={handleCheckout}>
            {" "}
            CheckOut
          </button>
        )}
      </div>
    </div>
  );
}

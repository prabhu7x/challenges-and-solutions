import React, { useContext } from "react";
import { images } from "../../images";
import { DataContext } from "../../Context/DataContext";

function Cart() {
  const { removeFromCart, state } = useContext(DataContext);
  
  return (
    <div className="cart">
      <div className="line"> </div>
        <h1>Cart</h1>
      <div className="cart_insider">
        {state.cart.length === 0 ? (
            <h3 className="empty-cart">cart is empty</h3>
        ) : (
          state.cart.map((item) => (
            <div className="cart-items-container" key={item.id}>
              <div className="cart_items">
                <img className="product" src={images.thumbnail_1} alt="" />
                <div>
                  <p>{item.offer}</p>
                  <p>
                    ${item.price}.00 x <span>{item.quantity}</span> <span>{item.price * item.quantity}.00</span>
                  </p>
                </div>
                <button onClick={() => removeFromCart({ id: 1, name: "some" })}>
                  <img src={images.del} alt="delete" />
                </button>
              </div>
              <button className="checkout">Checkout</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;

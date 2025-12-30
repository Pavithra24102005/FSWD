import React, { useState } from "react";

function EcommerceProduct() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 699 },
    { id: 2, name: "Keyboard", price: 1499 },
    { id: 3, name: "Headphones", price: 1999 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h2>🛍️ E-Commerce Store</h2>

      {/* Cart Info */}
      <div style={styles.cartInfo}>
        🛒 Cart Items: <strong>{cart.length}</strong>
      </div>

      {/* Product List */}
      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={styles.button}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div style={styles.cart}>
          <h3>🛒 Cart</h3>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹ {item.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  cartInfo: {
    marginBottom: "20px",
    fontSize: "18px",
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  cart: {
    marginTop: "30px",
    padding: "15px",
    borderTop: "2px solid #ccc",
  },
};

export default EcommerceProduct;

import { useState } from "react";

function ProductBrowsingPage() {
  const [category, setCategory] = useState("electronics");

  const products = {
    electronics: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Smartphone" },
    ],
    clothing: [
      { id: 3, name: "T-Shirt" },
      { id: 4, name: "Jeans" },
    ],
    books: [
      { id: 5, name: "React Guide" },
      { id: 6, name: "JavaScript Basics" },
    ],
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h2>Product Store</h2>
      </div>

      {/* Navigation */}
      <div style={styles.navbar}>
        <button style={styles.navBtn} onClick={() => setCategory("electronics")}>
          Electronics
        </button>
        <button style={styles.navBtn} onClick={() => setCategory("clothing")}>
          Clothing
        </button>
        <button style={styles.navBtn} onClick={() => setCategory("books")}>
          Books
        </button>
      </div>

      {/* Product Display */}
      <div style={styles.content}>
        <h3 style={styles.title}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h3>

        <div style={styles.productList}>
          {products[category].map((product) => (
            <div key={product.id} style={styles.productCard}>
              {product.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* CSS written as JSX */
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f9fafb",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#1f2937",
    color: "#ffffff",
    padding: "15px",
    textAlign: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#e5e7eb",
  },
  navBtn: {
    padding: "8px 15px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  content: {
    padding: "30px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#1f2937",
  },
  productList: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  productCard: {
    width: "160px",
    padding: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default ProductBrowsingPage;

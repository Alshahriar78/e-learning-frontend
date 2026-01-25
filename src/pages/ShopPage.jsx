// src/pages/Shop.jsx
import React, { useEffect, useState } from "react";
import { getProductsApi } from "../api/product.api";
import ProductList from "../components/products/ProductList";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsApi();
        setProducts(res.data.products); // assuming API returns { products: [...] }
      } catch (err) {
        console.error("Failed to fetch products:", err.response?.data);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Shop</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ShopPage;

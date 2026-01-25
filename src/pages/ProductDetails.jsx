// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByIdApi } from "../api/product.api";
import PaymentModal from "../components/payment/PaymentModal";

const ProductDetails = () => {
  const { id } = useParams(); // get product id from route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductByIdApi(id);
        
        setProduct(res.data.product); // API returns single product object
      } catch (err) {
        console.error("Failed to fetch product:", err.response?.data || err.message);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  // Example: payment status logic
  const isPaid = false; // set dynamically based on your payment API

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow rounded">
      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-4">{product.productTitle}</h1>

      {/* Product Image */}
      <img
        src={product.productImages}
        alt={product.productTitle}
        className="w-full h-50 object-cover rounded mb-6"
      />

      {/* Product Price */}
      <p className="text-2xl font-semibold text-blue-600 mb-4">
        Price: ৳ {product.productPrice}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition" onClick={() => setShowPayment(true)}>
          Buy Now
        </button>
        <button
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          disabled={!isPaid} // disabled if payment not successful
        >
          Download Code
        </button>
      </div>

      {/* Product Description */}
      <h2 className="text-xl font-semibold mb-2">Product Description</h2>
      <p className="text-gray-700">{product.productDetails}</p>
      {console.log(product)}
      {showPayment && (
        <PaymentModal
          productId={id}
          productType="product"
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
};

export default ProductDetails;

// src/components/products/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <img
        src={product.productImages}
        alt={product.productTitle}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.productTitle}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {product.productDetails.substring(0, 100)}...
        </p>
        <p className="font-semibold text-blue-600 mt-2">৳ {product.productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;

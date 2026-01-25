// src/components/products/AllProductsSlider.jsx
import { useRef } from "react";
import ProductCard from "./ProductCard";

const AllProductsSlider = ({ products }) => {
  const sliderRef = useRef(null);

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center py-10">No products available</p>;
  }

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative my-10">
      <h2 className="text-2xl font-bold mb-4 px-4">All Products</h2>

      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-4"
      >
        {products.map((product) => (
          <div key={product._id} className="shrink-0 w-72 md:w-80 lg:w-96">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default AllProductsSlider;

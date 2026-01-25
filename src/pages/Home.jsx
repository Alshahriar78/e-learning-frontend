import { useEffect, useState } from "react";
import AllCoursesSlider from "../components/courses/AllCoursesSlider";
import AllProductsSlider from "../components/products/AllProductsSlider";
import ImageSlider from "../components/ImageSlider";
import TrustedCompanies from "../components/TrustedCompanies";
import { getCoursesApi } from "../api/course.api";
import { getProductsApi } from "../api/product.api";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch courses and products simultaneously
        const [coursesRes, productsRes] = await Promise.all([
          getCoursesApi(),
          getProductsApi(),
        ]);
        // log data field
      console.log("Products API response data:", productsRes.data);
         setCourses(coursesRes.data.courses || []);
      setProducts(productsRes.data.products || []);
        
      } catch (err) {
        console.error(err.response?.data || err.message);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading data...</p>;

  return (
    <div className="space-y-16">
      {/* Hero Slider */}
      <ImageSlider />

      {/* Trusted Companies */}
      <TrustedCompanies />

      {/* Courses Slider */}
      <AllCoursesSlider courses={courses } />

      
      <AllProductsSlider products={products} />

      <TeamSection/>
      <Footer/>
    </div>
  );
};

export default Home;

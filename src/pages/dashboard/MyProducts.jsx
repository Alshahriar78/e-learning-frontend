import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOrderApi } from "../../api/myOrder.api";

const MyProducts = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getMyOrderApi({ page: 1, limit: 10, type: "product" });
        setCourses(res.data.data); 
      } catch (err) {
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (courses.length === 0) return <p className="text-center mt-10">No courses found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((order) => (
          <div 
            key={order._id}
            className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/course/${order.productId}`)}
          >
            <img
              src={order.product.thumbnail}
              alt={order.product.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{order.product.title}</h3>
            <p className="text-blue-600 font-semibold">৳ {order.product.price}</p>
            <p className="text-gray-500 mt-1">Payment: {order.paymentMethod}</p>
            <p className="text-green-600 mt-1">{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




export default MyProducts;
